import React, {Component} from 'react';

class PeopleList extends Component {
  constructor() {
    super();
    this.state = {
      npm: [
       { fullStory:
        { dailyDownloads: '19',
          weeklyDownloads: '5091',
          monthlyDownloads: '17742' } },
       { githubProjects:
        { dailyDownloads: '2',
          weeklyDownloads: '77',
          monthlyDownloads: '77' } },
       { syncSyncCtor:
        { dailyDownloads: '5',
          weeklyDownloads: '42',
          monthlyDownloads: '42' } },
       { reactAddRedux:
        { dailyDownloads: '8',
          weeklyDownloads: '114',
          monthlyDownloads: '210' } },
       { anyArgs:
        { dailyDownloads: '19',
          weeklyDownloads: '5097',
          monthlyDownloads: '17798' } },
       { circleImage:
        { dailyDownloads: '0',
          weeklyDownloads: '47',
          monthlyDownloads: '517' } }
      ],
    github: [
       { fullStory: { stars: '1', forks: '0' } },
       { githubProjects: { stars: '0', forks: '0' } },
       { syncSyncCtor: { stars: '0', forks: '0' } },
       { reactAddRedux: { stars: '6', forks: '2' } },
       { anyArgs: { stars: '0', forks: '0' } },
       { circleImage: { stars: '3', forks: '3' } }
     ]
   };
 }

  render() {
    return (
      <div>
        <ul>
          {this.state.github.map((mod) => {
            return Object.keys(mod).map((key) => {
              return <li>
                <span>{key}</span>
                <span>Stars</span> {mod[key].stars}
              </li>
            })
          })}
        </ul>
      </div>
    )
  }

}

export default PeopleList;
