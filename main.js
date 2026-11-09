const produtos = [
    {
      nome: "Notebook",
      categoria: "tecnologia",
      quantidade: 10,
      preco: 2399.00
    },
    {
        nome: "Mouse",
      categoria: "Acessórios",
      quantidade: 25,
      preco: 55.90
    },
    {
        nome: "Drone Ultraleve de Bolso",
      categoria: "tecnologia",
      quantidade: 2,
      preco: 12000.90
    },
    {
        nome: "Monitor",
      categoria: "tecnologia",
      quantidade: 15,
      preco: 150.00
    },
    {
        nome: "anel inteligente ",
      categoria: "Acessórios",
      quantidade: 3,
      preco: 3500.00
    },
    {
        nome: "Óculos de Realidade Aumentada",
      categoria: "Acessórios",
      quantidade: 5,
      preco: 3900.00
    },
    {
        nome: "Fone de ouvido",
      categoria: "Acessórios",
      quantidade: 20,
      preco: 200.90
    },
    {
        nome: "Webcam",
      categoria: "tecnologia",
      quantidade: 10,
      preco: 279.90
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  } 