import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSymptomEntry } from '../../actions/profile';
import { Button } from 'semantic-ui-react';
import { Col, Row, Card, CardTitle, CardText } from 'reactstrap';

const CreateSymptom = ({ addSymptomEntry, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    date: '',
    symptom1: '',
    symptom2: '',
    symptom3: '',
    symptom4: '',
    temp: '',
    comment: '',
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
                onSubmit={(e) => {
                  e.preventDefault();
                  addSymptomEntry({
                    date,
                    symptom1,
                    symptom2,
                    symptom3,
                    symptom4,
                    temp,
                    comment,
                    immediateAttention,
                  });
                }}
              >
                <h3 className='text-center'>Patient Symptom Entery</h3>
                <br></br>
                <br></br>
                {/* <input
                  type='hidden'
                  className='form-group'
                  name='immediateAttention'
                  value={immediateAttention}
                  onChange={(e) => onChange(e)}
                /> */}
                <div className='form-group'>
                  <label>Date</label> {'  '}
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
                    type='text'
                    placeholder='YES or NO'
                    name='symptom1'
                    value={symptom1}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <br></br>
                  <label>Sore Throat?</label> {'  '}
                  <input
                    type='text'
                    placeholder='YES or NO'
                    name='symptom2'
                    value={symptom2}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <br></br>
                  <label>A Dry Cough?</label> {'  '}
                  <input
                    type='text'
                    placeholder='YES or NO'
                    name='symptom3'
                    value={symptom3}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <br></br>
                  <label>Heigh Fever?</label> {'  '}
                  <input
                    type='text'
                    placeholder='YES or NO'
                    name='symptom4'
                    value={symptom4}
                    onChange={(e) => onChange(e)}
                    required
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
                    onChange={(e) => onChange(e)}
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
                    onChange={(e) => onChange(e)}
                  />
                </div>
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
                <br></br>
                <br></br>
                <input
                  type='submit'
                  className='btn btn-primary btn-block btn-lg'
                />
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
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  addSymptomEntry,
})(CreateSymptom);
