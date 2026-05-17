import { prisma } from "../config/db.js";
import type { CreateServicoInput } from "../interfaces/dtos/servico.js";

export class ServicoService {
    public async create(servicoData: CreateServicoInput) {
        try {
            const servico = await prisma.servicos.create({
                data: {
                    nome_servico: servicoData.nome,
                    valor_servico: servicoData.valor
                }
            });
        } catch (e) {
            throw new Error("Erro ao criar novo serviço.")
        }
    }
}