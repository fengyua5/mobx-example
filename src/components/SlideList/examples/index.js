import './index.scss';
import '../../../../../../scss/common/base';

import React, {Component} from 'react';
import {render} from 'react-dom';
import SlideList, {SlideContainer} from '../index';

const data = [
  {
    "interpolate": [],
    "name": "喻琬瑶",
    "rencaiku": 1,
    "show_name": 1,
    "show_email_phone": 1,
    "echeng_has_contact": 1,
    "resumeId": "61932550",
    "resume_id": "61932550",
    "photo": "",
    "download": 0,
    "age": "23",
    "src": "",
    "gender": "",
    "resume_updated_at": "2018-05-02 00:00:00",
    "degree": "专科",
    "address": "上海市",
    "is_private": 0,
    "lock_status": 0,
    "recruit_status": 0,
    "yueta_show": 1,
    "work_experience": 2,
    "expect_city_names": "",
    "expect_remarks": "",
    "except_work_at": "",
    "current_status": 0,
    "education": {
      "major": "会计学",
      "school": "江西财经大学",
      "degree": "本科",
      "start_stop": "2015.01 - 至今"
    },
    "is_good": 0,
    "verification": [],
    "basic_salary_to": 0,
    "basic_salary_from": 0,
    "email": "15221217560@163.com",
    "phone": "15221217560",
    "deliver_source": "100",
    "id": "661725",
    "workdiff": 0,
    "projectdiff": 0,
    "addressdiff": 0,
    "expect_citydiff": 0,
    "workinfo": [{
      "company": "上海凯钛投资管理有限公司",
      "position": "企业专员",
      "start_stop": "2017.04 - 2018.04"
    }, {
      "company": "上海孟美财务咨询有限公司",
      "position": "",
      "start_stop": "2015.07 - 2017.02"
    }],
    "updated_type_desc": "更新于",
    "last_updated_at": "05-02",
    "last_updated_at_unix": 1525190400
  },
  {
    "interpolate": [],
    "name": "喻琬瑶",
    "rencaiku": 1,
    "show_name": 1,
    "show_email_phone": 1,
    "echeng_has_contact": 1,
    "resumeId": "61932550",
    "resume_id": "61932550",
    "photo": "",
    "download": 0,
    "age": "23",
    "src": "",
    "gender": "",
    "resume_updated_at": "2018-05-02 00:00:00",
    "degree": "专科",
    "address": "上海市",
    "is_private": 0,
    "lock_status": 0,
    "recruit_status": 0,
    "yueta_show": 1,
    "work_experience": 2,
    "expect_city_names": "",
    "expect_remarks": "",
    "except_work_at": "",
    "current_status": 0,
    "education": {
      "major": "会计学",
      "school": "江西财经大学",
      "degree": "本科",
      "start_stop": "2015.01 - 至今"
    },
    "is_good": 0,
    "verification": [],
    "basic_salary_to": 0,
    "basic_salary_from": 0,
    "email": "15221217560@163.com",
    "phone": "15221217560",
    "deliver_source": "100",
    "id": "661725",
    "workdiff": 0,
    "projectdiff": 0,
    "addressdiff": 0,
    "expect_citydiff": 0,
    "workinfo": [{
      "company": "上海凯钛投资管理有限公司",
      "position": "企业专员",
      "start_stop": "2017.04 - 2018.04"
    }, {
      "company": "上海孟美财务咨询有限公司",
      "position": "",
      "start_stop": "2015.07 - 2017.02"
    }],
    "updated_type_desc": "更新于",
    "last_updated_at": "05-02",
    "last_updated_at_unix": 1525190400
  },
];

class SlideListExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="slide-list-example">
        <SlideList
          ref="slideList"
          getPopupContainer={() => {
            return document.querySelector('.slide-list-example')
          }}
          render={() => {
            return (
              <SlideContainer
                title="简历更新人数 (421)"
                type="resume"
                list={data}
              />
            )
          }}
        >
          <div>Hello World</div>
        </SlideList>

        <button onClick={() => {
          this.refs.slideList.show();
        }}>ssss
        </button>
      </div>
    );
  }
}

render(
  <SlideListExample/>,
  document.getElementById('j-react-root')
);
