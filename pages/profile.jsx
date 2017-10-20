import React from 'react';
import { Helmet } from "react-helmet";
import Bio from '../components/bio/bio.jsx';
import ProjectList from '../components/project-list/project-list.jsx';
import pageSettings from '../js/app-page-settings';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProfile() {
    if (!this.props.profile) return null;

    return <div className="col-12"><Bio {...this.props.profile} user={this.props.user} /></div>;
  }

  renderProjects() {
    if (!this.props.profile || this.props.profile.published_entries.length < 1) return null;

    return <div className="col-12">
      {/* TODO:FIXME: for now let's just render all entries at once. (no 'view more' button) I will file another PR to refine this. */}
      <ProjectList entries={this.props.profile.published_entries}
        loadingData={false}
        moreEntriesToFetch={false}
        fetchData={()=>{}}
        restoreScrollPosition={pageSettings.shouldRestore}
        onModerationMode={false}
      />
    </div>;
  }

  render() {
    return (
      <div className="profile-page">
        <Helmet><title>Profile</title></Helmet>
        <div className="row">
          { this.renderProfile() }
        </div>
        <div className="row">
          { this.renderProjects() }
        </div>
      </div>
    );
  }
}
export default Profile;