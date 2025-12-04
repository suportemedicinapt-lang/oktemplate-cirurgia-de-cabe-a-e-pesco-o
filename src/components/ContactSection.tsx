import { PlaceholderText, PlaceholderBlock } from "./PlaceholderText";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Agende sua Consulta
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-muted-foreground">
            <PlaceholderText showHint={false}>
              Personalize esta mensagem de boas-vindas para seus pacientes
            </PlaceholderText>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground">
                    <PlaceholderText showHint={false}>(00) 0000-0000</PlaceholderText>
                  </p>
                  <p className="text-muted-foreground">
                    <PlaceholderText showHint={false}>(00) 00000-0000</PlaceholderText>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <p className="text-muted-foreground">
                    <PlaceholderText showHint={false}>seu@email.com</PlaceholderText>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horário</h4>
                  <p className="text-muted-foreground text-sm">
                    <PlaceholderText showHint={false}>Segunda a Sexta: 08h às 18h</PlaceholderText>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <PlaceholderText showHint={false}>Sábado: 08h às 12h</PlaceholderText>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-[#25D366] hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map & Address */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden h-full">
              {/* Address Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço do Consultório</h4>
                    <p className="text-muted-foreground">
                      <PlaceholderText showHint={false}>
                        Rua Exemplo, 123 - Sala 456
                      </PlaceholderText>
                    </p>
                    <p className="text-muted-foreground">
                      <PlaceholderText showHint={false}>
                        Bairro, Cidade - Estado, CEP 00000-000
                      </PlaceholderText>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <PlaceholderBlock className="m-6 h-64 flex items-center justify-center border-accent/30" label="Mapa">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent/50 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm mb-4">
                    Incorpore aqui o mapa do Google Maps
                  </p>
                  <p className="text-xs text-accent">
                    Substitua este bloco pelo iframe do Google Maps com seu endereço
                  </p>
                </div>
              </PlaceholderBlock>

              {/* CTA */}
              <div className="p-6 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-foreground font-medium">
                  Precisa de ajuda para chegar?
                </p>
                <Button variant="default">
                  <MapPin className="w-4 h-4" />
                  Abrir no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
