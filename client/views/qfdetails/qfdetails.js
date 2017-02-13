AutoForm.addHooks(['fields1','fields2','fields3','fields4','fields5','fields6','fields7','fields8'], {
  onError() {
    console.log('onError hook called with arguments', arguments);
    console.log('onError hook context:', this);
  },
  onSubmit() {
    alert('Submitted!');
    this.done();
    return false;
  }
});
