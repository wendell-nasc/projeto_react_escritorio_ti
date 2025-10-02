// // src/components/ProductView.tsx
// // Rastrear Visualização de Produto
// import { useEffect } from 'react';
// import { facebookPixelService } from './facebookPixelService';

// const ProductView = ({ product }) => {
//   useEffect(() => {
//     // Rastreia visualização do produto
//     facebookPixelService.trackViewContent({
//       content_name: product.name,
//       content_category: product.category,
//       value: product.price
//     });
//   }, [product]);

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>R$ {product.price}</p>
//     </div>
//   );
// };

// // Rastrear Adição ao Carrinho
// // src/components/AddToCartButton.tsx
// import { facebookPixelService } from './facebookPixelService';

// const AddToCartButton = ({ product, cartItems }) => {
//   const handleAddToCart = () => {
//     // Sua lógica de adicionar ao carrinho...
    
//     // Rastreia evento
//     facebookPixelService.trackAddToCart({
//       value: product.price,
//       currency: 'BRL',
//       content_ids: [product.id]
//     });
//   };

//   return (
//     <button onClick={handleAddToCart}>
//       Adicionar ao Carrinho
//     </button>
//   );
// };


// // Rastrear Formulário de Contato
// // src/components/ContactForm.tsx
// import { facebookPixelService } from './facebookPixelService';

// const ContactForm = () => {
//   const handleSubmit = (formData) => {
//     // Envia formulário...
    
//     // Rastreia lead
//     facebookPixelService.trackLead();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Nome" required />
//       <input type="email" placeholder="Email" required />
//       <button type="submit">Enviar</button>
//     </form>
//   );
// };


// //USAR ESSES COM HOOK

// // 💡 EXEMPLOS DE USO
// // Em um componente de produto:
// // tsx
// // import { useFacebookPixel } from '../hooks/useFacebookPixel';

// // const ProductPage = ({ product }) => {
// //   const { trackViewContent, trackAddToCart } = useFacebookPixel();

// //   useEffect(() => {
// //     // Rastreia visualização do produto
// //     trackViewContent(product.name, product.category, product.price);
// //   }, [product, trackViewContent]);

// //   const handleAddToCart = () => {
// //     // Sua lógica de adicionar ao carrinho
// //     trackAddToCart(product.price, [product.id]);
// //   };

// //   return (
// //     <div>
// //       <h1>{product.name}</h1>
// //       <p>R$ {product.price}</p>
// //       <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
// //     </div>
// //   );
// // };
// // Em um formulário de contato:
// // tsx
// // import { useFacebookPixel } from '../hooks/useFacebookPixel';

// // const ContactForm = () => {
// //   const { trackLead } = useFacebookPixel();

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // Sua lógica de envio do formulário...
    
// //     // Rastreia lead
// //     trackLead(50); // Valor estimado do lead
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="text" placeholder="Nome" required />
// //       <input type="email" placeholder="Email" required />
// //       <button type="submit">Enviar</button>
// //     </form>
// //   );
// // };
// // ✅ VERIFICAÇÃO
// // Para testar se está funcionando:
// // Abra o console do navegador

// // Digite: window.fbq - deve retornar uma função

// // Teste manualmente:

// // javascript
// // window.fbq('track', 'ViewContent', {
// //   content_name: 'Test Product',
// //   content_category: 'Test Category'
// // });