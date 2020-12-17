// import { null } from 'mathjs';
import React, { Component } from 'react';
import firebase from './Config/Firebase';
import * as Utils from './Utils/QuestionGenerator';

// import QuestionsDataService from './QuestionsDataService'

class Temp extends Component {
  state = {
    questions: null,
  };
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    console.log('Loading...');
    const db = firebase.firestore();
    const firebaseDb = db.collection('/questions');
    console.log(firebaseDb);
    const snapshot = db.collection('/questions');
    const collections = await snapshot.get();
    const questions = [];
    collections.docs.forEach((item) => {
      const question = item.data();
      questions.push({ id: item.id, ...question });
      // Object.keys(question).forEach((key) => {
      //   console.log(`${key} - ${question[key]}`);
      // });
    });
    console.log(questions);
    questions.forEach((question, idx) => {
      const q = question.question;
      const params = {};
      for (let i = 0; ; i += 1) {
        if (!(i in question)) break;
        params[i] = question[i];
      }

      Object.keys(params)
        .sort()
        .forEach((key) => {
          const params1 = { ...params };
          const param = params[key];
          if (param.indexOf('{val}') > -1) params1.val = Utils.randomIntFromInterval(10, 99);
          const substitute = Utils.replaceValues(param, params1);
          const evalstr = Utils.evaluate(substitute);
          params[key] = evalstr;
        });
      const answer = Utils.evaluate(Utils.replaceValues(question.answer, params));
      const questionstr = Utils.replaceValues(question.question, params);
      const question1 = { answer: answer, question: questionstr };
      questions[idx] = { ...question, ...params };
      console.log(question1);
    });
    // const snapshot = db.collection('/questions').startAfter(2).limit(1);
    // const item = await snapshot.get();
    // const questions = [];
    // // collections.docs.forEach((item) => {
    //   const question = item.data();
    //   questions.push({ id: item.id, ...question });
    //   // Object.keys(question).forEach((key) => {
    //   //   console.log(`${key} - ${question[key]}`);
    //   // });
    // // });
    console.log(questions);
    this.setState({ questions: questions });
    // if (!doc.exists) {
    //   console.log('No such document!');
    // } else {
    //   console.log('Document data:', doc.data());
    // }
    // const snapshot = await firebase.collection('questions').get();
    // const questions = [];
    // snapshot.docs.forEach((doc) => {
    //   questions.push(doc.data());
    //   console.log(doc.id, '=>', doc.data());
    // });
    // this.setState({ questions: questions });
    // console.log(`Loaded${this.state.questions[0]}`);
    // // const firebaseDb = firebase.collection('/questions')
    // // firebaseDb.settings({
    // //   timestampsInSnapshots: true,
    // // });
    // // const snapshot = await firebaseDb.collection('questions').get();
    // // snapshot.forEach((doc) => {
    // //   console.log(doc);
    // // });
  }

  render() {
    if (!this.state.questions) return <p>Loading....</p>;
    else {
      const wrapper = this.state.questions.map((question, idx) => {
        return (
          <p key={question.id}>
            {question.question} - {question.answer}
          </p>
        );
      });
      return <div>{wrapper}</div>;
    }
  }
}

export default Temp;
