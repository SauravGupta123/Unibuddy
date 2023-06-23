import React from 'react';

function AddResources() {
  return (
    <>
      <form action="#" method="post">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required /><br/><br/>

        <label htmlFor="sem">Semester:</label>
        <select id="sem" name="sem" required>
          <option value="">Select a semester</option>
          <option value="Sem1">Sem1</option>
          <option value="Sem2">Sem2</option>
          <option value="Sem3">Sem3</option>
          <option value="Sem4">Sem4</option>
          <option value="Sem5">Sem5</option>
          <option value="Sem6">Sem6</option>
          <option value="Sem7">Sem7</option>
          <option value="Sem8">Sem8</option>

        </select><br/><br/>

        <label htmlFor="resource">Resource Link:</label>
        <input type="text" id="resource" name="resource" required /><br/><br/>

        <label htmlFor="subject">Subject:</label>
        <select id="subject" name="subject" required>
          <option value="">Select a subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select><br/><br/>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddResources;
