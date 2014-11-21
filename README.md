#RSS Feeds Reader

[Project Link](http://linh-feedsreader.herokuapp.com)
- Existant user information: 
   + username: user
   + password: password

Features:
- Rails back-end:
   - User's authentication
   - User has many feeds, each feeds has many entries
- Backbone front end:
   - Add/Remove Subviews for each feed ([Check out the code](https://github.com/linhbui/feeds_reader/blob/master/app/assets/javascripts/news_reader.js))
   - Retrieve entries
- Twitter Bootstrap

To run project locally:
- bundle install
- bundle exec rake db:create db:migrate db:seed
- Sign in information: 
   + username: user
   + password: password
