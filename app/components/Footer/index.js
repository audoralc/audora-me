/**
*
* Footer
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import Paper from 'material-ui/Paper';

import glamorous from 'glamorous';
import ReactTooltip from 'react-tooltip';

const StyledIcon = glamorous.a ({
  fontSize: '1.25em',
  color:"#424242",
  ':hover':{
    color: "#00B0FF",
  }
})

const colors= {
  white: "#FAFAFA",
  black: "#424242",
  accentPurple: "#9575CD",
  lightBlue: "#B3E5FC",
  brightBlue:"#00B0FF",
  lightGreen: "#C8E6C9",
  darkGreen: "#00C853",

}


class Footer extends React.PureComponent {


  render() {
    const footerContainer= {
      gridRow: '6 / 6',
      gridColumn: '1 / 4 span',
      maxWidth: '100vw',
    }


    const footerStyle={
      display: "flex",
      flexDirection: "column",
      background: colors.lightGreen,
      padding: '.5em 1em',
            maxWidth: '100vw',

    }

    const footerFontStyle={
      justifyContent: "space-between",
      color: "#673AB7",
      margin: "0 0",
    }

    const ulstyleReset={
      paddingLeft: "0px",
    }

    const iconBlockStyle={
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: '50vw',
      margin: '0 auto',
    }

    const iconListStyle= {
      listStyleType: "none",
    }

    const copyrightStyle= {
      textAlign: 'center',
      lineHeight: "1em",
    }

    const linkTextStyle={

    }

    return (
      <div style={footerContainer}>

        <footer>

          <Paper style={footerStyle} zDepth={2}>

            <ul style={ulstyleReset}>

              <div style={iconListStyle}>

                <div style={iconBlockStyle}>

                  <a
                    data-tip="Email"
                    href="mailto:audoralc@gmail.com">

                    <StyledIcon aria-label="email icon">
                      <svg fill="currentColor" width="24" height="24" viewBox="0 0 40 40"> <g>
                      <path d="m40 15.848571428571429v17.72285714285714q0 1.471428571428575-1.048571428571428 2.5228571428571414t-2.5228571428571414 1.0485714285714351h-32.85714285714286q-1.4714285714285715 0-2.522857142857143-1.048571428571428t-1.0485714285714263-2.5228571428571485v-17.72285714285714q0.9828571428571428 1.0942857142857143 2.2542857142857144 1.942857142857143 8.08 5.489999999999998 11.094285714285714 7.699999999999999 1.2714285714285722 0.937142857142856 2.064285714285715 1.46142857142857t2.1085714285714285 1.071428571428573 2.4571428571428555 0.5471428571428554h0.04285714285714448q1.138571428571428 0 2.4571428571428555-0.5471428571428589t2.1085714285714303-1.071428571428573 2.064285714285713-1.46142857142857q3.7942857142857136-2.7457142857142856 11.114285714285717-7.699999999999999 1.2742857142857176-0.8714285714285701 2.2342857142857113-1.942857142857143z m0-6.562857142857142q0 1.7628571428571433-1.0942857142857179 3.371428571428572t-2.722857142857144 2.7428571428571438l-10.447142857142858 7.257142857142856q-0.2228571428571442 0.15428571428571303-0.9485714285714302 0.6799999999999997t-1.2042857142857137 0.8485714285714288-1.1600000000000001 0.725714285714286-1.282857142857143 0.6028571428571432-1.1142857142857139 0.1999999999999993h-0.04571428571428626q-0.514285714285716 0-1.1142857142857139-0.1999999999999993t-1.2857142857142847-0.6028571428571432-1.1571428571428584-0.725714285714286-1.2071428571428573-0.8485714285714288-0.9485714285714284-0.6814285714285724q-2.031428571428572-1.428571428571427-5.848571428571429-4.075714285714287t-4.5757142857142785-3.1799999999999997q-1.3857142857142861-0.9371428571428577-2.6142857142857148-2.578571428571429t-1.2242857142857144-3.0471428571428554q5.984795992119984e-17-1.7428571428571438 0.9257142857142858-2.9000000000000004t2.645714285714286-1.161428571428571h32.85714285714286q1.451428571428572 0 2.5114285714285742 1.0471428571428572t1.0600000000000023 2.522857142857143z"></path></g>
                      </svg>
                    </StyledIcon>
                  </a>


                  <a
                    data-tip="Github"
                    href="https://github.com/audoralc">

                    <StyledIcon aria-label="Github icon">

                      <svg fill="currentColor" width="24" height="24" viewBox="0 0 40 40"><g><path d="m37.142857142857146 20q0 5.602857142857143-3.2714285714285722 10.07857142857143t-8.447142857142858 6.194285714285712q-0.6028571428571432 0.11428571428571388-0.8814285714285717-0.15428571428571303t-0.27857142857142847-0.6714285714285708v-4.708571428571428q0-2.1657142857142873-1.1600000000000001-3.171428571428571 1.2714285714285722-0.13285714285714434 2.28857142857143-0.3999999999999986t2.1000000000000014-0.8714285714285701 1.807142857142857-1.4828571428571422 1.1828571428571415-2.3428571428571416 0.4571428571428555-3.361428571428572q0-2.6999999999999993-1.7628571428571433-4.600000000000001 0.8257142857142874-2.0285714285714285-0.17857142857142705-4.551428571428572-0.6285714285714299-0.20285714285714285-1.8099999999999987 0.242857142857142t-2.0528571428571425 0.9857142857142858l-0.8485714285714288 0.5342857142857138q-2.0757142857142874-0.5800000000000001-4.285714285714285-0.5800000000000001t-4.285714285714285 0.5800000000000001q-0.35714285714285765-0.24571428571428555-0.9485714285714284-0.6028571428571432t-1.8628571428571465-0.860000000000003-1.9185714285714308-0.29999999999999893q-0.9857142857142858 2.5199999999999996-0.15714285714285658 4.549999999999999-1.7628571428571433 1.8971428571428568-1.7628571428571433 4.600000000000001 0 1.8957142857142841 0.4571428571428573 3.347142857142856t1.1714285714285708 2.3428571428571416 1.7971428571428572 1.4957142857142856 2.0999999999999996 0.8714285714285701 2.2857142857142865 0.3999999999999986q-0.8914285714285715 0.8028571428571425-1.0928571428571434 2.3000000000000007-0.47142857142857153 0.22142857142857153-1.0057142857142853 0.33285714285714363t-1.2714285714285722 0.1114285714285721-1.4628571428571426-0.4800000000000004-1.2385714285714293-1.3957142857142841q-0.4242857142857144-0.7142857142857153-1.0828571428571436-1.1600000000000001t-1.104285714285714-0.5357142857142847l-0.4471428571428575-0.0671428571428585q-0.4671428571428571 0-0.6457142857142859 0.10000000000000142t-0.11142857142857121 0.25714285714285623 0.20000000000000018 0.31428571428571317 0.2914285714285718 0.2671428571428578l0.15714285714285658 0.1114285714285721q0.4900000000000002 0.2228571428571442 0.9714285714285715 0.8485714285714288t0.6999999999999993 1.1371428571428588l0.2242857142857151 0.5142857142857125q0.2914285714285718 0.8471428571428561 0.9857142857142858 1.37142857142857t1.4942857142857147 0.6714285714285744 1.5514285714285716 0.15428571428571303 1.2385714285714293-0.07857142857142918l0.5114285714285707-0.09142857142857252q0 0.8485714285714252 0.011428571428570677 1.9857142857142875t0.011428571428570677 1.2071428571428555q0 0.4028571428571439-0.28999999999999915 0.6714285714285708t-0.8914285714285715 0.15714285714285836q-5.178571428571429-1.7199999999999989-8.448571428571428-6.195714285714285t-3.2714285714285714-10.07857142857143q0-4.6657142857142855 2.3-8.604285714285714t6.238571428571431-6.235714285714284 8.6-2.3000000000000003 8.604285714285716 2.3000000000000003 6.238571428571426 6.2385714285714275 2.299999999999997 8.604285714285712z"></path></g></svg>

                    </StyledIcon>
                  </a>


                  <a
                    data-tip="LinkedIn"
                    href="https://www.linkedin.com/in/achalker24">

                    <StyledIcon aria-label="LinkedIn icon">

                      <svg fill="currentColor" width="24" height="24" viewBox="0 0 40 40"><g><path d="m10.647142857142859 13.951428571428572v22.119999999999997h-7.3657142857142865v-22.119999999999997h7.365714285714285z m0.468571428571428-6.831428571428572q0.024285714285714022 1.628571428571429-1.1257142857142863 2.7228571428571433t-3.024285714285714 1.0942857142857143h-0.042857142857142705q-1.831428571428571 0-2.948571428571429-1.0942857142857143t-1.1171428571428574-2.7228571428571433q0-1.6514285714285712 1.15-2.734285714285715t3.0028571428571427-1.0828571428571427 2.968571428571428 1.0828571428571427 1.138571428571428 2.734285714285714z m26.02714285714286 16.27142857142857v12.68h-7.342857142857142v-11.82857142857143q0-2.345714285714287-0.9057142857142857-3.671428571428571t-2.8242857142857147-1.3285714285714292q-1.4071428571428584 0-2.3571428571428577 0.7685714285714269t-1.4142857142857146 1.9085714285714275q-0.24714285714285822 0.6714285714285708-0.24714285714285822 1.8085714285714296v12.342857142857145h-7.342857142857142q0.042857142857142705-8.904285714285713 0.042857142857142705-14.440000000000001t-0.02285714285714313-6.607142857142858l-0.02142857142857224-1.0714285714285712h7.342857142857142v3.2142857142857135h-0.04285714285714448q0.4471428571428575-0.7142857142857153 0.9142857142857146-1.25t1.2628571428571433-1.1600000000000001 1.9400000000000013-0.9714285714285715 2.557142857142857-0.3457142857142852q3.814285714285713 0 6.137142857142859 2.532857142857143t2.3242857142857147 7.422857142857145z"></path></g></svg>

                    </StyledIcon>
                  </a>                  

                  <a
                    data-tip="Twitter"
                    href="https://twitter.com/klioonthemoon">

                    <StyledIcon aria-label="twitter icon">

                      <svg fill="currentColor" width="24" height="24" viewBox="0 0 40 40" ><g><path d="m37.588571428571434 9.107142857142858q-1.4957142857142856 2.185714285714287-3.614285714285714 3.7285714285714278 0.02142857142857224 0.3114285714285714 0.02142857142857224 0.935714285714285 0 2.9000000000000004-0.8485714285714252 5.792857142857143t-2.578571428571429 5.547142857142855-4.118571428571428 4.699999999999999-5.75714285714286 3.2571428571428562-7.21285714285715 1.2171428571428606q-6.048571428571429 0-11.071428571428571-3.2371428571428567 0.7814285714285716 0.08999999999999986 1.7428571428571429 0.08999999999999986 5.021428571428571 0 8.95-3.080000000000002-2.3428571428571434-0.04285714285714448-4.1971428571428575-1.4385714285714286t-2.5428571428571427-3.5599999999999987q0.7357142857142858 0.11428571428571388 1.3599999999999994 0.11428571428571388 0.9600000000000009 0 1.8971428571428568-0.24714285714285822-2.5-0.5142857142857125-4.140000000000001-2.4885714285714293t-1.6399999999999997-4.585714285714285v-0.09142857142857075q1.517142857142857 0.8499999999999996 3.257142857142857 0.9171428571428581-1.4714285714285715-0.9828571428571422-2.3428571428571434-2.5671428571428567t-0.8714285714285714-3.4371428571428577q0-1.9657142857142862 0.9857142857142853-3.6400000000000006 2.6999999999999993 3.3257142857142856 6.571428571428571 5.324285714285715t8.294285714285717 2.2200000000000006q-0.17857142857142705-0.8485714285714288-0.17857142857142705-1.6514285714285712 0-2.991428571428571 2.1085714285714268-5.1t5.102857142857147-2.112857142857142q3.1257142857142846 0 5.267142857142858 2.2785714285714285 2.432857142857145-0.46857142857142886 4.575714285714284-1.7428571428571429-0.8257142857142838 2.5685714285714276-3.171428571428571 3.9742857142857133 2.07714285714286-0.22285714285714242 4.152857142857144-1.1142857142857139z"></path></g></svg>
                    </StyledIcon>
                  </a>

                </div>

              </div>

            </ul>

            <div style={copyrightStyle}>

              <p style={footerFontStyle}> © 2017 audora chalker. made with&nbsp; <img
                src="http://audora.me/img/emoji/heart.png"
                height="24px"
                width="24px"
                alt="heart emoji"/>&nbsp; + &nbsp; <img
                src="http://audora.me/img/emoji/coffee.png"
                height="24px"
                width="24px"
                alt="coffee emoji"/>. </p>
            </div>

          </Paper>
        </footer>
      </div>
    );
  }
}

export default Footer;
