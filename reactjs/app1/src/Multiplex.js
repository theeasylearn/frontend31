import React from "react";
import Movie from "./Movie";
export default class Multiplex extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Maxus</h1>
          </div>
          <Movie name='Stree 2' starcast='Shradhha Kapoor' duration='180' price='250'
            photo='http://picsum.photos/300?random=2' />

          {/* <Movie name='RRR' starcast='Ram charan, Kali charan' duration='240' price='399'
            photo='http://picsum.photos/300?random=3' /> */}

        </div>
      </div>
    )
  }
}