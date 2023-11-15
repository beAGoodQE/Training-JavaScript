const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log(`Beep Boop`);
      }
    }
}
const tinCan = robotFactory('P-500', true);
tinCan.beep();


// We can now use "property value shorthand"
const robotFactory2 = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log(`Beep Boop`);
      }
    }
}
const tinCan2 = robotFactory2('P-500', true);
tinCan2.beep();
