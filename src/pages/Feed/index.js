import React, { Component } from 'react';
import api from '../../services/api';
import io from 'socket.io-client';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

import './style.css';

class Feed extends Component {
    state = {
        feed: [],
    };

    componentDidMount() {
        this.resgisterToSocket();
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

    resgisterToSocket = () => {
        const socket = io('http://localhost:3333');

        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] });
        });

        socket.on('like', likedPost => {
            this.setState({ 
                feed: this.state.feed.map(post => 
                    post._id === likedPost._id ? likedPost : post
                )
            });
        });
    }

    hadleLike = async (id) => {
        try {
            api.post(`posts/${id}/like`);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { feed } = this.state;
        return (
            <section id="post-list">
                { feed.map(item => (
                    <article key={item._id}>
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
                                <button type onClick={() => this.hadleLike(item._id)}>
                                 <img src={like} alt="" />
                                </button>
                                <img src={comment} alt="" />
                                <img src={send} alt="" />
                            </div>

                             <strong>{item.likes} curtidas</strong>
                            
                            <p>
                                {item.description}
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