import { TemplateRepository } from "../../domain/repositories/TemplateRepository";
import { Template } from "../../domain/entities/Template";

export class MockTemplateRepository implements TemplateRepository {
  async fetchTemplates(): Promise<Template[]> {
    return [
      {
        name: "Business Pro",
        category: "Negócios",
        price: "25.000",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        description: "Template profissional para empresas e consultorias.",
        popular: true,
      },
      {
        name: "Shop Master",
        category: "E-commerce",
        price: "35.000",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        description: "Loja virtual completa com WooCommerce integrado.",
        popular: false,
      },
      {
        name: "Blog Writer",
        category: "Blog",
        price: "15.000",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
        description: "Design elegante para blogs e sites de conteúdo.",
        popular: false,
      },
      {
        name: "Creative Portfolio",
        category: "Portfólio",
        price: "20.000",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop",
        description: "Mostre seus trabalhos com estilo e profissionalismo.",
        popular: true,
      },
      {
        name: "Foodie Restaurant",
        category: "Restaurante",
        price: "30.000",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        description: "Template para restaurantes com menu e reservas.",
        popular: false,
      },
      {
        name: "Corporate Elite",
        category: "Negócios",
        price: "28.000",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        description: "Ideal para grandes empresas e corporações.",
        popular: false,
      },
    ];
  }
}
