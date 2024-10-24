vendas = [
    {"produto": "Mouse", "categoria": "Eletrônicos", "quantidade": 3, "preco_unitario": 50.00},
    {"produto": "Teclado", "categoria": "Eletrônicos", "quantidade": 2, "preco_unitario": 150.00},
    {"produto": "Cadeira", "categoria": "Móveis", "quantidade": 1, "preco_unitario": 300.00}
]


def calcular_total_vendas(vendas):
    total_por_categoria = {}
    for venda in vendas:
        categoria = venda["categoria"]
        total_venda = venda["quantidade"] * venda["preco_unitario"]

        if categoria in total_por_categoria:
            total_por_categoria[categoria] += total_venda
        else:
            total_por_categoria[categoria] = total_venda

    return total_por_categoria


def calcular_media_precos(vendas):
    soma_precos = {}
    contagem_itens = {}

    for venda in vendas:
        categoria = venda["categoria"]
        preco_unitario = venda["preco_unitario"]

        if categoria in soma_precos:
            soma_precos[categoria] += preco_unitario
            contagem_itens[categoria] += 1
        else:
            soma_precos[categoria] = preco_unitario
            contagem_itens[categoria] = 1

    media_por_categoria = {categoria: soma_precos[categoria] / contagem_itens[categoria]
                           for categoria in soma_precos}
    return media_por_categoria


try:
    vendas = [
        {"produto": "Mouse", "categoria": "Eletrônicos", "quantidade": 3, "preco_unitario": 50.00},
        {"produto": "Teclado", "categoria": "Eletrônicos", "quantidade": 2, "preco_unitario": 150.00},
        {"produto": "Cadeira", "categoria": "Móveis", "quantidade": 1, "preco_unitario": 300.00}
    ]

    total_vendas = calcular_total_vendas(vendas)
    media_precos = calcular_media_precos(vendas)

    print("Total de Vendas por Categoria:", total_vendas)
    print("Média de Preços por Categoria:", media_precos)

except Exception as e:
    print(f"Ocorreu um erro: {e}")
