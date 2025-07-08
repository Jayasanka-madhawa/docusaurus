import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🚀 Easy to Integrate',
    Svg: require('@site/static/img/data-trends-svgrepo-com.svg').default,
    description: (
      <>
        Nervotec is built for developers—quick to deploy, simple to test, and flexible enough to fit into any health or wellness platform.
      </>
    ),
  },
  {
    title: '🎯 Focus on What Matters',
    Svg: require('@site/static/img/target-svgrepo-com.svg').default,
    description: (
      <>
        Don’t worry about complex hardware or setup. With just a camera and a few lines of code, Nervotec delivers accurate physiological data—so you can focus on your product. <code>docs</code> directory.
      </>
    ),
  },
  {
    title: '⚛️ Powered by Science & Vision',
    Svg: require('@site/static/img/idea-svgrepo-com.svg').default,
    description: (
      <>
        Our system combines advanced computer vision and signal processing, wrapped in a customizable web experience powered by modern web tech.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
