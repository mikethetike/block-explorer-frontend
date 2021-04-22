import React from 'react';
import './BlockExplorer.scss';
import PlainGraphTitle from './GraphTitles/PlainGraphTitle';
import EstimatedHashGraph from './EstimatedHashGraph';
import TargetDifficultyGraph from './TargetDifficultyGraph';
import Hero from './Hero';
import HeroGraph from './Graphs/HeroGraph';
import LatestBlocks from './LatestBlocks';
import CirculatingTokenGraph from './CirculatingTokenGraph';

export default function BlockExplorer() {
    return (
        <section className="BlockExplorer">
            <Hero>
                <PlainGraphTitle title="Blocks Overview" />
                <HeroGraph width={570} height={220} yAxisTicks={4} />
                <PlainGraphTitle title="Latest Blocks" />
                <LatestBlocks />
            </Hero>

            <article className="flex-group">
                <EstimatedHashGraph />
                <CirculatingTokenGraph />
                <TargetDifficultyGraph />
            </article>
        </section>
    );
}
