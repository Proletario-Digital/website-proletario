import { ServiceRepository } from "../../domain/repositories/ServiceRepository";
import { ServicesData } from "../../domain/entities/Service";

export class MockServiceRepository implements ServiceRepository {
  async fetchServices(): Promise<ServicesData> {
    // Simulating loading time (e.g., local mock data)
    return {
      sitesPackages: [
        {
          name: "Básico",
          price: "50.000",
          period: "/mês",
          description: "Site Institucional Simples",
          features: [
            "Até 4 páginas",
            "Design Responsivo",
            "E-mails Corporativos (até 5 contas)",
            "Suporte",
            "Manutenção – 2x / Mês",
          ],
          highlight: false,
        },
        {
          name: "Intermediário",
          price: "75.000",
          period: "/mês",
          description: "Site Institucional Completo",
          features: [
            "Até 7 páginas",
            "Design Responsivo e Personalizado",
            "E-mails Corporativos (até 7 contas)",
            "Blog Integrado",
            "Suporte",
            "Manutenção – 5x / Mês",
          ],
          highlight: true,
        },
        {
          name: "Avançado",
          price: "100.000",
          period: "/mês",
          description: "E-commerce ou Blog Avançado",
          features: [
            "E-commerce ou Blog Avançado",
            "Design Responsivo e Personalizado",
            "E-mails Corporativos (até 10 contas)",
            "Suporte",
            "Manutenção – 10x / Mês",
          ],
          highlight: false,
        },
      ],
      emailPackages: [
        {
          name: "Básico",
          price: "18.000",
          period: "",
          description: "Para pequenas equipas",
          features: [
            "E-mails Corporativos (até 5 contas)",
            "Suporte",
          ],
          highlight: false,
        },
        {
          name: "Intermediário",
          price: "25.000",
          period: "",
          description: "Para equipas em crescimento",
          features: [
            "E-mails Corporativos (até 7 contas)",
            "Suporte",
          ],
          highlight: true,
        },
        {
          name: "Avançado",
          price: "30.000",
          period: "",
          description: "Para grandes equipas",
          features: [
            "E-mails Corporativos (até 10 contas)",
            "Suporte",
          ],
          highlight: false,
        },
      ],
      freelancerServices: [
        "Criação de Identidade Visual",
        "Consultoria em Estratégias de Marketing Digital",
        "Criação de Artes Gráficas",
        "Desenvolvimento de Apps Mobile, Desktop e Web",
        "Gestão de Tráfego Pago",
        "Design Web – UI/UX",
        "Fotografia Profissional e de Eventos",
        "Análise de Dados",
        "Power BI",
      ],
      freelancerMethodology: [
        "Consulta individual",
        "Criação do grupo no WhatsApp com o cliente e o Freelancer",
        "Contrato de prestação de serviços",
        "Realização",
        "Pagamento",
      ],
    };
  }
}
