import firebase from './Config/Firebase';

class QuestionsDataService {
  db = firebase.collection('questions');

  getAll() {
    return this.db;
  }

  create(question) {
    return this.db.add(question);
  }

  update(id, question) {
    return this.db.doc(id).update(question);
  }

  delete(id) {
    return this.db.doc(id).delete();
  }
}

export default new QuestionsDataService();
