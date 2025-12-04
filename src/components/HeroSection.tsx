import { Button } from "@/components/ui/button";
import { PlaceholderText } from "./PlaceholderText";
import { Calendar, Award, Users } from "lucide-react";
import doctorImage from "@/assets/doctor-placeholder.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--hero-gradient)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Especialista em Cirurgia de Cabeça e Pescoço</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <PlaceholderText showHint={false}>Dr. Seu Nome Aqui</PlaceholderText>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              <PlaceholderText showHint={false}>
                Sua descrição profissional aqui. Descreva sua especialidade, experiência e abordagem com os pacientes.
              </PlaceholderText>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="gold" size="xl">
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </Button>
              <Button variant="heroOutline" size="xl">
                Conheça Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl font-bold text-accent">
                  <PlaceholderText showHint={false}>15+</PlaceholderText>
                </p>
                <p className="text-sm text-primary-foreground/70">Anos de Experiência</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-accent">
                  <PlaceholderText showHint={false}>5000+</PlaceholderText>
                </p>
                <p className="text-sm text-primary-foreground/70">Pacientes Atendidos</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-accent">
                  <PlaceholderText showHint={false}>2000+</PlaceholderText>
                </p>
                <p className="text-sm text-primary-foreground/70">Cirurgias Realizadas</p>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="relative animate-fade-in-delay-2 hidden lg:block">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl rotate-3" />
              <div className="absolute -inset-4 bg-primary-foreground/10 rounded-2xl -rotate-3" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={doctorImage}
                  alt="Foto do médico - Substitua pela sua foto"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay with hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <p className="text-primary-foreground text-sm font-medium">
                    📷 Substitua pela sua foto profissional
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
