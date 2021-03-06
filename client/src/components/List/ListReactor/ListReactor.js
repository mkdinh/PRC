import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Card } from 'material-ui/Card';
import Preloader from "../../../components/Preloader";
import "./ListReactor.css";
import ProjectList, { ProjectFooter } from "./ProjectList";
import ComponentList from "./ComponentList";

export default class Listcompo extends React.Component {

  state = {
    project_title: "",
  };


  render() {
    return (
      <Card id="ListProject" style={{margin: "1rem"}}>
        <Tabs>
          <Tab label="Projects">
            {this.props.projects ?
              <ProjectList
                auth0Id={this.props.profile.auth0Id}
                updateProjects={this.props.updateProjects}
                toggleEditProject={this.props.toggleEditProject}
                addProject={this.props.addProject}
                projects={this.props.projects}/>
            :
            <div style={{width: "100%", textAlign: "center", margin: "2rem 0"}}>
              <p>No Current Project</p>
            </div>}

            <ProjectFooter 
              profile={this.props.profile}
              updateProjects={this.props.updateProjects}
              addSnackbar={this.props.addSnackbar}
              addProject={this.addProject}/>
          </Tab>

          <Tab label="Components">
            {
              Object.keys(this.props.customs).length > 0 ?
                <ComponentList
                  tab={this.props.tab}
                  updateActiveProject={this.props.updateActiveProject}
                  addSnackbar={this.props.addSnackbar}
                  addComponent={this.props.addComponent}
                  components={this.props.customs}/>
              :
              <div style={{width: "100%", textAlign: "center", margin: "2rem 0"}}>
                <Preloader/>           
              </div>
            }
          </Tab>
        </Tabs>
      </Card>
       
    );
  }
}