import { PlaceholderText, PlaceholderBlock } from "./PlaceholderText";
import { GraduationCap, Award, Building2 } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={clinicImage}
                alt="Interior do consultório - Substitua pela foto do seu consultório"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  📷 Substitua pela foto do seu consultório
                </p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-xl shadow-card p-6 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    <PlaceholderText showHint={false}>CRM 00000</PlaceholderText>
                  </p>
                  <p className="text-sm text-muted-foreground">Registro Profissional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-delay-1">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Sobre Mim</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              <PlaceholderText showHint={false}>Seu Nome Completo Aqui</PlaceholderText>
            </h2>
            <div className="section-divider mb-8" />
            
            <PlaceholderBlock label="Sua biografia">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Escreva aqui sua história profissional. Conte sobre sua formação, sua trajetória 
                e o que o motivou a seguir a especialidade de Cirurgia de Cabeça e Pescoço.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Descreva sua abordagem com os pacientes, seus valores profissionais e o que 
                diferencia seu atendimento. Este é o espaço para criar conexão com quem visita seu site.
              </p>
            </PlaceholderBlock>

            {/* Credentials */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Formação</h4>
                  <p className="text-sm text-muted-foreground">
                    <PlaceholderText showHint={false}>Sua universidade e ano de formação</PlaceholderText>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Especialização</h4>
                  <p className="text-sm text-muted-foreground">
                    <PlaceholderText showHint={false}>Suas especializações e residências</PlaceholderText>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Atuação</h4>
                  <p className="text-sm text-muted-foreground">
                    <PlaceholderText showHint={false}>Hospitais e clínicas onde atende</PlaceholderText>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
