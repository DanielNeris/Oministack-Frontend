import React, { Component } from 'react';

import api from '../../services/api';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

import './index.css';

class Feed extends Component {
    state = {
        feed: [],
    };

    componentDidMount() {
        this.loadFeed();
    }

    loadFeed = async () => {
        try {
            const response = await api.get('posts');

            this.setState({ feed: response.data });

        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { feed } = this.state;
        return (
            <section id="post-list">
                { feed.map(item => (
                    <article>
                        <header>
                            <div className="user-info">
                                <span>{item.author}</span>
                                <span className="place">{item.place}</span>
                            </div>

                            <img src={more} alt="Mais" />
                        </header>

                        <img src={`http://localhost:3333/files/${item.image}`} alt="" />

                        <footer>
                            <div className="actions">
                                <img src={like} alt="" />
                                <img src={comment} alt="" />
                                <img src={send} alt="" />
                            </div>

                            <strong>{item.likes} curtidas</strong>

                            <p>
                                {item.descriptions}
                                <span>{item.hashtags}</span>
                            </p>
                        </footer>
                    </article>
                )) }
            </section>
        );
    }
}

export default Feed;