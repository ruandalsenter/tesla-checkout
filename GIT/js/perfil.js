// Funções para manipular o pop-up
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Chamar a função openPopup() quando o ícone de engrenagem for clicado
document.getElementById("abrirPopup").addEventListener("click", function() {
    openPopup();
});

// Adicionar evento de clique ao botão "Fechar" dentro do pop-up
document.getElementById("fecharPopup").addEventListener("click", function() {
    closePopup();
});

// Adicionar evento de clique ao botão "Remover Foto"
document.getElementById("removerFoto").addEventListener("click", function() {
// Definir a imagem padrão
document.querySelector(".profile-pic").src = "./img/default.png";
});

// Adicionar evento de mudança ao input de arquivo
document.getElementById("upload-photo").addEventListener("change", function(event) {
const file = event.target.files[0]; // Obtém o primeiro arquivo selecionado

if (file) {
    const reader = new FileReader(); // Criar um novo objeto FileReader

    reader.onload = function(e) {
        // Quando o arquivo é lido com sucesso
        document.getElementById("profilePic").src = e.target.result; // Definir a src da imagem de perfil como a URL de dados
    };

    reader.readAsDataURL(file); // Ler o conteúdo do arquivo como uma URL de dados
}
});