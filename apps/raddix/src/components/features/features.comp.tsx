import { AntiSubtitle } from '../home/anti-subtitle';
import Box from '../home/box';
import { SubTitle } from '../home/subtitle';
import styles from './features.module.scss';

const FeaturesComp = () => {
  const dataCard = [
    {
      title: 'Accesibilidad',
      description: `Raddix sigue la guia de creación de WAI-ARIA
      proporcionando accesibilidad y comportamiento para nuestros componentes,
      como la navegación del teclado y la administración de enfoque.`
    },
    {
      title: 'Developer Experience',
      description: `Cuenta con una API consistente y granular, fácil de aprender 
      debido a que comparten la misma estructura. Proporcionando asi una mejor 
      experiencia de desarrollo.`
    },
    {
      title: 'Fully customizable',
      description: `Raddix no incluye ningún renderizado o estructura DOM lo que le 
      permite representar el NODO DOM que desee. Tampoco hay necesidad de 
      anular estilos ya que viene sin ningún estilo previo.`
    }
  ];

  return (
    <Box.Section>
      <Box.Content alignment='center'>
        <AntiSubtitle text='Features' />
        <SubTitle text='Building for web3 has never been easier.' />
      </Box.Content>

      <div className={styles.card}>
        {dataCard.map((card, id) => (
          <div key={`${card.title}#${id}`}>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </Box.Section>
  );
};

export default FeaturesComp;
