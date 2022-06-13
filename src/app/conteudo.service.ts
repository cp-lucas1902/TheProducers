import { ConteudoMo } from './shared/conteudo.model'

export class ConteudoService{

    public conteudos:Array<ConteudoMo> = [
        {
            id: 1,
            categoria: "Plugins",
            titulo: "OTT",
            descricao_oferta: "Compressor Multibanda.",
            anunciante: "Xfer",
            valor: 0.00,
            destaque: true,
            imagens: [
                {url: "../assets/img/3845.png"}
            ],
            site:'https://xferrecords.com/freeware'
        },
        {
            id: 2,
            categoria: "Plugins",
            titulo: "Camel Crusher",
            descricao_oferta: "Compressão,Saturação...",
            anunciante: "Camel Audio",
            valor: 0.00,
            destaque: true,
            imagens: [
                {url: "../assets/img/camel-crusher.jpg"}
            ],
            site:'https://www.audiopluginsforfree.com/pt/camelcrusher/'
        
        },
        {
            id: 3,
            categoria: "Plugins",
            titulo: "Vital",
            descricao_oferta: "Sintetizador.",
            anunciante: "Vital Audio",
            valor: 0.00,
            destaque: true,
            imagens: [
                {url: "../assets/img/vital-synthesizer.png"}
            ],
            site:'https://vital.audio/'
        }
    ]

    public getConteudo():Array<ConteudoMo>{
        //console.log('Passou aqui ?')
        return this.conteudos
        
    }
}