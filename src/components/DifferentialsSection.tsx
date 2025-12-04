import { PlaceholderText } from "./PlaceholderText";
import { 
  Clock, 
  Shield, 
  Heart, 
  MessageCircle,
  Microscope,
  Users
} from "lucide-react";

const differentials = [
  {
    icon: Clock,
    title: "Atendimento Humanizado",
    description: "Tempo dedicado para ouvir e esclarecer todas as dúvidas do paciente.",
  },
  {
    icon: Microscope,
    title: "Tecnologia Avançada",
    description: "Equipamentos modernos para diagnóstico preciso e cirurgias minimamente invasivas.",
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description: "Protocolos rigorosos de segurança em todos os procedimentos.",
  },
  {
    icon: Heart,
    title: "Cuidado Integral",
    description: "Acompanhamento completo do pré ao pós-operatório.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação Clara",
    description: "Explicações detalhadas sobre diagnóstico, tratamento e expectativas.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Trabalho em conjunto com profissionais de diversas especialidades.",
  },
];

export const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Por que me escolher
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              <PlaceholderText showHint={false}>Meus Diferenciais</PlaceholderText>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <PlaceholderText showHint={false}>
                Descreva aqui o que torna seu atendimento especial. 
                O que seus pacientes mais valorizam no seu trabalho? 
                Qual é a sua filosofia de cuidado?
              </PlaceholderText>
            </p>

            {/* CTA Card */}
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="font-display text-xl font-semibold mb-2">
                Agende sua consulta
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                <PlaceholderText showHint={false}>
                  Sua mensagem de chamada para ação aqui
                </PlaceholderText>
              </p>
              <p className="font-display text-2xl font-bold">
                <PlaceholderText showHint={false}>(00) 00000-0000</PlaceholderText>
              </p>
            </div>
          </div>

          {/* Differentials Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-card border border-border/50 shadow-soft card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  <PlaceholderText showHint={false}>{item.title}</PlaceholderText>
                </h4>
                <p className="text-sm text-muted-foreground">
                  <PlaceholderText showHint={false}>{item.description}</PlaceholderText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
