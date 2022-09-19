import "./login.css";
import Logo from "../../../img/svgexport-1.svg";
import logoIphone from "../../../img/svgexport-2.svg";
import googlelogo from "../../../img/google.png";

export function TwitterLogin() {
  return (
    <div className="content">
      <div className="logo-2">
        <img src={Logo} alt="" />
      </div>
      <div className="title">
        <h1>Acontecendo agora</h1>
        <p>Inscreva-se no Twitter hoje mesmo.</p>
      </div>
      <div className="meios-de-login">
        <a href="">Fazer Login Como...</a>
        <a href="">Inscrever-se com a Apple</a>
        <img src={logoIphone} alt="" id="iphone" />
        <img src={googlelogo} alt="" id="google" />
      </div>
      <div className="children">
        <div className="quebra-1"></div>
        <div className="title-quebra">
          <p>ou</p>
        </div>
        <div className="quebra-2"></div>
      </div>
      <div className="telefone">
        <a href="#">Increva-se Com o Número De Celular ...</a>
      </div>
      <div className="end-form">
        <p>
          Ao se inscrever, você concorda com os <a href="">Termos de Serviço</a>{" "}
          e a <a href="">Política de Privacidade</a>, incluindo o{" "}
          <a href="">Uso de Cookies</a>.
        </p>
      </div>

      <div className="end">
        <h1>Já Tem Uma Conta?</h1>
        <div className="ent">
          <a href="">Entrar</a>
        </div>
      </div>
      <footer>
        <a href="">Sobre</a>
        <a href="">Central de Ajuda</a>
        <a href="">Termos de Serviço</a>
        <a href="">Política de Privacidade</a>
        <a href="">Política de cookies</a>
        <a href="">Acessibilidade</a>
        <a href="">Informações de anúncios</a>
        <a href="">Blog</a>
        <a href="">Status</a>
        <a href="">Carreiras</a>
        <a href="">Recursos da marca</a>
        <a href="">Publicidade</a>
        <a href="">Marketing</a>
        <a href="">Twitter para Empresas</a>
        <a href="">Desenvolvedores</a>
        <a href="">Diretório</a>
        <a href="">Configurações</a>
        <a href="">© 2022 Twitter, Inc.</a>
      </footer>
    </div>
  );
}
