import './Footer.css'

// import fundoDoFooter from '../imagens/fundo.png'
 
const Footer = () =>{

    return(
        <section className='footer'>
            <div className='redes'>
                <a href='https://www.instagram.com/'  target='_blank' alt='logo_instagram'><img src='../imagens/ig.png' /></a>
                <a href='https://www.facebook.com/'  target='_blank' alt='logo_facebook'><img src='../imagens/fb.png' /></a>
                <a href='https://x.com/'  target='_blank' alt='logo_twitter'><img src='../imagens/tw.png' /></a>
            </div>
            <img src='../imagens/logo.png' alt='logo_organo' />
            <h3>Desenvolvido por Sara Pires.</h3>
        </section>

    )


}


export default Footer