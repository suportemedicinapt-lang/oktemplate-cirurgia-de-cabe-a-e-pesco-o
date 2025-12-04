import { PlaceholderText } from "./PlaceholderText";
import { 
  Stethoscope, 
  HeartPulse, 
  Brain, 
  Ear, 
  Eye,
  Skull
} from "lucide-react";

const specialties = [
  {
    icon: Skull,
    title: "Cirurgia de Tireoide",
    description: "Procedimentos cirúrgicos para tratamento de nódulos, bócios e câncer de tireoide.",
  },
  {
    icon: Ear,
    title: "Cirurgia de Paratireoide",
    description: "Tratamento cirúrgico do hiperparatireoidismo e adenomas de paratireoide.",
  },
  {
    icon: HeartPulse,
    title: "Tumores de Cabeça e Pescoço",
    description: "Diagnóstico e tratamento cirúrgico de tumores benignos e malignos.",
  },
  {
    icon: Stethoscope,
    title: "Cirurgia de Glândulas Salivares",
    description: "Tratamento de tumores e doenças das glândulas parótida, submandibular e sublingual.",
  },
  {
    icon: Eye,
    title: "Cirurgia de Pele",
    description: "Remoção de lesões cutâneas, cistos e tumores de pele na região da cabeça e pescoço.",
  },
  {
    icon: Brain,
    title: "Cirurgia de Base de Crânio",
    description: "Procedimentos especializados em tumores que afetam a base do crânio.",
  },
];

export const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Especialidades
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Áreas de Atuação
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-muted-foreground">
            <PlaceholderText showHint={false}>
              Edite esta descrição para apresentar suas principais áreas de atuação e procedimentos realizados.
            </PlaceholderText>
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-soft card-hover border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <specialty.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                <PlaceholderText showHint={false}>{specialty.title}</PlaceholderText>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <PlaceholderText showHint={false}>{specialty.description}</PlaceholderText>
              </p>
            </div>
          ))}
        </div>

        {/* Note for customization */}
        <div className="mt-12 text-center">
          <p className="text-sm text-accent">
            💡 Personalize os cards acima com suas especialidades específicas
          </p>
        </div>
      </div>
    </section>
  );
};
