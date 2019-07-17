import React, { Component } from 'react';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

import './index.css';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Daniel</span>
                            <span className="place">SP</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post bem loko
                            <span>#React #node</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Daniel</span>
                            <span className="place">SP</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post bem loko
                            <span>#React #node</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;