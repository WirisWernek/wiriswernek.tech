export interface ProjetoModel {
  nome: string;
  descricao: string;
  tags: string[];
  repositorio?: string;
  url?: string;
  preview: string;
}
