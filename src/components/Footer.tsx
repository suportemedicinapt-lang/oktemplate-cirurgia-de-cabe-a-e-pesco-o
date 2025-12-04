import { PlaceholderText } from "./PlaceholderText";
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">D</span>
              </div>
              <div>
                <p className="font-display font-semibold">
                  <PlaceholderText showHint={false}>Dr. Seu Nome</PlaceholderText>
                </p>
                <p className="text-xs text-background/60">Cirurgia de Cabeça e Pescoço</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              <PlaceholderText showHint={false}>
                Cuidando da sua saúde com dedicação e expertise há mais de X anos.
              </PlaceholderText>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <a href="#sobre" className="block text-sm text-background/70 hover:text-background transition-colors">
                Sobre
              </a>
              <a href="#especialidades" className="block text-sm text-background/70 hover:text-background transition-colors">
                Especialidades
              </a>
              <a href="#diferenciais" className="block text-sm text-background/70 hover:text-background transition-colors">
                Diferenciais
              </a>
              <a href="#contato" className="block text-sm text-background/70 hover:text-background transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>
                <PlaceholderText showHint={false}>(00) 00000-0000</PlaceholderText>
              </p>
              <p>
                <PlaceholderText showHint={false}>seu@email.com</PlaceholderText>
              </p>
              <p>
                <PlaceholderText showHint={false}>Sua cidade, Estado</PlaceholderText>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} <PlaceholderText showHint={false}>Dr. Seu Nome</PlaceholderText>. Todos os direitos reservados.
            </p>
            <p className="text-sm text-background/60 flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-accent" /> por 
              <PlaceholderText showHint={false}>Sua Agência/Nome</PlaceholderText>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
