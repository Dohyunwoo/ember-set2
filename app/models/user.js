import DS from 'ember-data';
import autoComputed from '@ember-decorators/auto-computed';

export default DS.Model.extend({
  // firebase session service specific
  uid: DS.attr('string'),
  apiKey: DS.attr('string'),
  appName: DS.attr('string'),
  authDomain: DS.attr('string'),
  displayName: DS.attr('string'),
  email: DS.attr('string'),
  emailVerified: DS.attr('boolean'),
  isAnonymous: DS.attr('boolean'),
  phoneNumber: DS.attr('string'),
  photoURL: DS.attr('string'),
  // providerData: DS.attr(),
  // redirectEventId: DS.attr(),
  // stsTokenManager: DS.attr(),
  online: DS.attr('boolean'),

  // domain specific
  requests: DS.hasMany('request'),

  // @autocomputed('email', 'emailVerified') is9pler(email, emailVerified) {
  //   //manage-flex-orders restriction
  //   return (email.endsWith('@9ple.com') && emailVerified);
  // }
});
