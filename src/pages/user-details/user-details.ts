import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubUsersProvider } from '../../providers/github-users/github-users';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  user: User;
  login: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsersProvider: GithubUsersProvider) {
    this.login = navParams.get('login');
    githubUsersProvider.loadDetails(this.login).subscribe(user => {
      this.user = user;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
