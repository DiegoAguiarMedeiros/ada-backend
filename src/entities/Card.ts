export default class Card {
    public _id?: string;
  
    public titulo: string;
    
    public conteudo: string;

    public lista: string;

    public user: string;
    
    constructor(props: Card) {
      const {
        titulo,
        conteudo,
        lista,
        user
      } = props;
  
      if (!user || user.length === 0) {
        throw new Error('Card: Card user is invalid.');
      } 
      if (!titulo || titulo.length === 0) {
        throw new Error('Card: Card titulo is invalid.');
      } 
      if (!conteudo || conteudo.length === 0) {
        throw new Error('Card: Card conteudo is invalid.');
      } 
      if (!lista || lista.length === 0) {
        throw new Error('Card: Card lista is invalid.');
      } 

  
      Object.assign(this, props);
    }
  }