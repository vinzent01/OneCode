import footerStyles from '../app/css/footer.module.css';
    
export default function Footer(){
    return (
        <footer className={footerStyles.footer}>
            <p>© {new Date().getFullYear()} OneCode. Feito com Next.js.</p>
        </footer>
    )
}