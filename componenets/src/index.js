import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>hello dick</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo="Today at 4:23PM"
          CommentD="Hello"
          commentImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="alex"
          timeAgo="Today at 1:23AM"
          CommentD="Sonnnn"
          commentImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="jon"
          timeAgo="Today at 12:23PM"
          CommentD="Goooooood"
          commentImg={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
