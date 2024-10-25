<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "kwaigold.12355@gmail.com";
    $subject = "Novo contato de $name";
    $body = "Nome: $name\nE-mail: $email\nMensagem: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar a mensagem.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
