# Importando bibliotecas necessárias
import os
from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime, date
from dicionario import olimpiadas
import unicodedata

# Inicializando o aplicativo Flask
app = Flask(__name__)

# Função para parsear datas
def parse_date(date_str):
    if not date_str or date_str.strip().upper() == 'N/A':
        return None
    try:
        return datetime.strptime(date_str.strip(), '%d/%m/%Y').date()
    except ValueError:
        print(f"Warning: DATE ERROR '{date_str}'")
        return None

# Função para determinar o status da olimpíada
def get_status(item):
    today = date.today()
    data_inicial_dt = parse_date(item.get('dataInicial'))
    data_final_dt = parse_date(item.get('dataFinal'))

    # Se não tem nenhuma das datas, retorna "Em breve"
    if not data_inicial_dt and not data_final_dt:
        return "Em breve"
    if data_inicial_dt and data_inicial_dt > today:
        return "Em breve"
    elif data_inicial_dt and data_final_dt and data_inicial_dt <= today <= data_final_dt:
        return "Aberto"
    elif data_final_dt and data_final_dt < today:
        return "Fechado"
    elif data_inicial_dt and data_inicial_dt <= today and not data_final_dt:
        return "Aberto"
    elif data_final_dt and data_final_dt >= today and not data_inicial_dt:
        return "Aberto"
    return "Indefinido"

# Função para normalizar texto (remover acentos)
def normalize_text(text):
    if not text:
        return ''
    text = unicodedata.normalize('NFKD', str(text))
    text = ''.join([c for c in text if not unicodedata.combining(c)])
    return text.lower()

# Rotas principais
@app.route('/')
def inicio():
    return render_template('inicio.html')

@app.route('/sobre')
def saibaMais():
    return render_template('sobre.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

# Rota da página de olimpíadas
@app.route('/olimpiadas')
def olimpiada():
    return render_template('olimpiadas.html')

# Rotas de filtro por categoria
@app.route('/olimpiadas/exatas')
def exatas():
    return redirect(url_for('filtros', category='Exatas'))

@app.route('/olimpiadas/tecnologia')
def tecnologia():
    return redirect(url_for('filtros', category='Tecnologia'))

@app.route('/olimpiadas/linguagens')
def linguagens():
    return redirect(url_for('filtros', category='Linguagens'))

@app.route('/olimpiadas/humanas')
def humanas():
    return redirect(url_for('filtros', category='Humanas'))

@app.route('/olimpiadas/interdiciplinares-outros')
def interdiciplinares_outros():
    return redirect(url_for('filtros', category='Interdisciplinares e outros'))

@app.route('/olimpiadas/ciencias-natureza')
def ciencias_natureza():
    return redirect(url_for('filtros', category='Ciências da Natureza'))

# Rota principal de catálogo com filtros
@app.route('/catalogo')
def filtros():
    olimpiadas_list = [v for v in olimpiadas.values()]
    
    # Obtém todos os valores para cada tipo de filtro
    categories = request.args.getlist('category')
    statuses = request.args.getlist('status')
    tipos_inscricao = request.args.getlist('tipo_inscricao')
    niveis = request.args.getlist('quem_pode')
    formato = request.args.getlist('online')

    # Filtra por categoria (permite múltiplas)
    if categories:
        olimpiadas_list = [o for o in olimpiadas_list if o.get('categoria') in categories]
    
    # Filtra por status (permite múltiplos)
    if statuses:
        olimpiadas_list = [o for o in olimpiadas_list if get_status(o) in statuses]
    
    # Filtra por tipo de inscrição (permite múltiplos)
    if tipos_inscricao:
        conditions = []
        if 'escola' in tipos_inscricao:
            conditions.append(lambda o: o.get('inscriçãoEscola', False))
        if 'aluno' in tipos_inscricao:
            conditions.append(lambda o: o.get('inscriçãoAluno', False))
        
        if conditions:
            olimpiadas_list = [o for o in olimpiadas_list if any(cond(o) for cond in conditions)]
    
    # Filtra por nível (permite múltiplos)
    if niveis:
        level_map = {
            'f1': 'fundamental1',
            'f2': 'fundamental2',
            'em': 'ensinoMedio',
            'sup': 'ensinoSuperior',
            'livre': 'livre'
        }
        valid_keys = [level_map[n] for n in niveis if n in level_map]
        
        if valid_keys:
            olimpiadas_list = [o for o in olimpiadas_list if any(o.get(key, False) for key in valid_keys)]

    if formato:
        olimpiadas_list = [o for o in olimpiadas_list if o.get('formatoOnline') is True]


    return render_template('catalogo.html', olimpiadas_list=olimpiadas_list, get_status=get_status)

@app.route('/buscar', methods=['GET'])
def buscar():
    termo = request.args.get('pesquisa', '').lower()
    termo_normalizado = normalize_text(termo)
    resultados = []
    
    if termo_normalizado:
        for key, olimpiada in olimpiadas.items():
            if not isinstance(olimpiada, dict):
                continue
                
            # Busca em múltiplos campos
            campos_busca = [
                olimpiada.get('abreviacao', ''),
                olimpiada.get('olimpiada', ''),
                olimpiada.get('descricao', '')
            ]
            
            if any(termo_normalizado in normalize_text(campo) for campo in campos_busca):
                resultados.append(olimpiada)
    
    # Passa a função get_status para o template
    return render_template('buscar.html',
        termo=termo,
        resultados=resultados,
        hoje=datetime.now().strftime('%d/%m/%Y'),
        get_status=get_status) 

# Executando o aplicativo
if __name__ == '__main__':
    app.run(debug=True)