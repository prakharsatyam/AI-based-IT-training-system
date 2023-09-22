import type { NextPage } from "next";
import styles from "@/styles/signup.module.css";

const SignUp: NextPage = () => {
  return (
    <div className={styles.signUp}>
      <img className={styles.cifigmaIcon} alt="" src="/cifigma.svg" />
      <div className={styles.signUpChild} />
      <div className={styles.signUpItem} />
      <div className={styles.saly1}>
        <img className={styles.saly1Icon} alt="" src="/saly1@2x.png" />
      </div>
      <div className={styles.bicoin} />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.createAccount}>Create Account</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.createAccount1}>Create Account</b>
      </div>
      <div className={styles.signUpInner} />
      <div className={styles.rectangleDiv} />
      <img className={styles.signUpChild1} alt="" src="/group-1.svg" />
      <img
        className={styles.logosgoogleIcon}
        alt=""
        src="/logosgoogleicon.svg"
      />
      <div className={styles.lineParent}>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.or}>OR</div>
      </div>
      <div className={styles.english}>English</div>
      <b className={styles.lk}>LK</b>
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <div className={styles.signInGoogle}>Sign in Google</div>
      <div className={styles.signInFcebook}>Sign in Fcebook</div>
      <div className={styles.signUpChild2} />
      <div className={styles.signUpChild3} />
      <div className={styles.signUpChild4} />
      <div className={styles.email}>Email</div>
      <div className={styles.username}>Username</div>
      <div className={styles.password}>Password</div>
      <img className={styles.bipersonFillIcon} alt="" src="/bipersonfill.svg" />
      <img
        className={styles.evaemailOutlineIcon}
        alt=""
        src="/evaemailoutline.svg"
      />
      <img
        className={styles.antDesignlockFilledIcon}
        alt=""
        src="/antdesignlockfilled.svg"
      />
      <b className={styles.signUp1}>Sign Up</b>
      <div className={styles.lineDiv} />
      <div className={styles.dontYouHaveContainer}>
        <span className={styles.dontYouHave}>Don’t You have account,</span>
        <b className={styles.clickHere}>click here.</b>
      </div>
      <div className={styles.joinWithUsContainer}>
        <p className={styles.joinWithUs}>Join with us and create</p>
        <p className={styles.joinWithUs}>
          <span>{`                         your `}</span>
          <span className={styles.ui}>Ui</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
