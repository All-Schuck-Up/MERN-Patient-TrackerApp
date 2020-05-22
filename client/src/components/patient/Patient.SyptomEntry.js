import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addSymptomEntry } from '../../actions/profile';
import { Button } from 'semantic-ui-react';
import { Col, Row, Card, CardTitle, CardText } from 'reactstrap';

const CreateSymptom = ({ getCurrentProfile, addSymptomEntry, history }) => {
  const [formData, setFormData] = useState({
    date: Date.now,
    symptom1: false,
    symptom2: false,
    symptom3: false,
    symptom4: false,
    temp: '',
    comment: null,
    immediateAttention: false,
  });

  const {
    date,
    symptom1,
    symptom2,
    symptom3,
    symptom4,
    temp,
    comment,
    immediateAttention,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   addSymptomEntry(formData, history);
  //   console.log('Entry created');
  // };

  return (
    <Fragment>
      <div>
        <Row>
          <Col sm='6'>
            <Card body>
              <form
                className='form'
                className='form-horizontal'
                onSubmit={(e) => {
                  e.preventDefault();
                  addSymptomEntry(formData, history);
                }}
              >
                <h3 className='text-center'>Patient Symptom Entery</h3>
                <input
                  type='hidden'
                  className='form-group'
                  name='immediateAttention'
                  value={immediateAttention}
                  onChange={(e) => onChange(e)}
                />
                <div className='form-group'>
                  <h4>From Date</h4>
                  <input
                    type='date'
                    name='date'
                    value={date}
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <label>Trouble breathing?</label> {'  '}
                  <input
                    type='checkbox'
                    name='symptom1'
                    checked={symptom1}
                    value={symptom1}
                    onChange={() => {
                      setFormData({ ...formData, symptom1: !symptom1 });
                    }}
                  />
                  <br></br>
                  <label>Sore Throat?</label> {'  '}
                  <input
                    type='checkbox'
                    name='symptom2'
                    checked={symptom2}
                    value={symptom2}
                    onChange={() => {
                      setFormData({ ...formData, symptom2: !symptom2 });
                    }}
                  />
                  <br></br>
                  <label>A Dry Cough?</label> {'  '}
                  <input
                    type='checkbox'
                    name='symptom3'
                    checked={symptom3}
                    value={symptom3}
                    onChange={() => {
                      setFormData({ ...formData, symptom3: !symptom3 });
                    }}
                  />
                  <br></br>
                  <label>Heigh Fever?</label> {'  '}
                  <input
                    type='checkbox'
                    name='symptom4'
                    checked={symptom4}
                    value={symptom4}
                    onChange={() => {
                      setFormData({ ...formData, symptom4: !symptom4 });
                    }}
                  />
                </div>
                <div className='form-group'>
                  <label>Temperature</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter boby temp'
                    name='temp'
                    value={temp}
                    onChange={onChange}
                    required
                  />
                  <br></br>
                  <label>Additional Note:</label>
                  <textarea
                    type='text'
                    className='form-control'
                    placeholder='Add any additional comments for your provider'
                    name='comment'
                    value={comment}
                    onChange={onChange}
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary btn-block btn-lg'
                >
                  Save to Record
                </button>
                <br></br>
                <button
                  className='btn btn-secondary'
                  onClick={() => {
                    setFormData({
                      ...formData,
                      immediateAttention: !immediateAttention,
                    });
                  }}
                >
                  Mark entry as immediate attention
                </button>{' '}
                <button className='btn btn-primary' type='button'>
                  cancel
                </button>
              </form>
            </Card>
          </Col>

          <Col sm='4'>
            <Card>
              <CardTitle>
                {' '}
                <h3 className='text-center'>Latest Doctor Note</h3>
              </CardTitle>
              <CardText>
                {' '}
                On click doctors note from patient profile will be displayed On
                click doctors note from patient profile
              </CardText>
              <Button>View</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

CreateSymptom.propTypes = {
  addSymptomEntry: PropTypes.func.isRequired,
};

export default connect(null, {
  addSymptomEntry,
})(CreateSymptom);
