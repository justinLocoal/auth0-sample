'use client';

import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./DashboardNav.module.css";
import { useUser } from '@auth0/nextjs-auth0/client';

const _interactionsData = JSON.parse(
  '{"events":{"e-223":{"id":"e-223","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|13783405-4a60-1806-b07a-2c982c1b3c7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|13783405-4a60-1806-b07a-2c982c1b3c7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091183209},"e-229":{"id":"e-229","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|13783405-4a60-1806-b07a-2c982c1b3c7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|13783405-4a60-1806-b07a-2c982c1b3c7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091259330},"e-230":{"id":"e-230","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-229"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|13783405-4a60-1806-b07a-2c982c1b3c7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|13783405-4a60-1806-b07a-2c982c1b3c7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091259338},"e-231":{"id":"e-231","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|16ca4274-4d06-adb2-a98b-6079407a713f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|16ca4274-4d06-adb2-a98b-6079407a713f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091427404},"e-233":{"id":"e-233","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-234"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|16ca4274-4d06-adb2-a98b-6079407a713f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|16ca4274-4d06-adb2-a98b-6079407a713f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091427404},"e-234":{"id":"e-234","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-233"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|16ca4274-4d06-adb2-a98b-6079407a713f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|16ca4274-4d06-adb2-a98b-6079407a713f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091427404},"e-235":{"id":"e-235","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-236"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|43abd582-51b5-8287-b2a8-95f005ec1f87","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|43abd582-51b5-8287-b2a8-95f005ec1f87","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091427893},"e-237":{"id":"e-237","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-238"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|43abd582-51b5-8287-b2a8-95f005ec1f87","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|43abd582-51b5-8287-b2a8-95f005ec1f87","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091427893},"e-238":{"id":"e-238","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-237"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|43abd582-51b5-8287-b2a8-95f005ec1f87","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|43abd582-51b5-8287-b2a8-95f005ec1f87","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091427893},"e-239":{"id":"e-239","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-240"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|aecac88b-77fc-cb26-aa05-6757a2078066","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|aecac88b-77fc-cb26-aa05-6757a2078066","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091428326},"e-241":{"id":"e-241","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-242"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|aecac88b-77fc-cb26-aa05-6757a2078066","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|aecac88b-77fc-cb26-aa05-6757a2078066","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091428326},"e-242":{"id":"e-242","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-241"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|aecac88b-77fc-cb26-aa05-6757a2078066","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|aecac88b-77fc-cb26-aa05-6757a2078066","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091428326},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|b5e12812-4717-4359-c4fc-0f83c455cb2a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|b5e12812-4717-4359-c4fc-0f83c455cb2a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091428750},"e-245":{"id":"e-245","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|b5e12812-4717-4359-c4fc-0f83c455cb2a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|b5e12812-4717-4359-c4fc-0f83c455cb2a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091428750},"e-246":{"id":"e-246","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-245"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|b5e12812-4717-4359-c4fc-0f83c455cb2a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|b5e12812-4717-4359-c4fc-0f83c455cb2a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091428750},"e-247":{"id":"e-247","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-248"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|a4524501-d470-ec88-ca40-96ba225d3206","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|a4524501-d470-ec88-ca40-96ba225d3206","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091429267},"e-249":{"id":"e-249","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|a4524501-d470-ec88-ca40-96ba225d3206","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|a4524501-d470-ec88-ca40-96ba225d3206","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091429267},"e-250":{"id":"e-250","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-249"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|a4524501-d470-ec88-ca40-96ba225d3206","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|a4524501-d470-ec88-ca40-96ba225d3206","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091429267},"e-251":{"id":"e-251","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-252"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|e7f8c127-130b-1bfd-d54c-db2c2ef3e28a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|e7f8c127-130b-1bfd-d54c-db2c2ef3e28a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091430132},"e-253":{"id":"e-253","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-254"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|e7f8c127-130b-1bfd-d54c-db2c2ef3e28a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|e7f8c127-130b-1bfd-d54c-db2c2ef3e28a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091430132},"e-254":{"id":"e-254","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-253"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|e7f8c127-130b-1bfd-d54c-db2c2ef3e28a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|e7f8c127-130b-1bfd-d54c-db2c2ef3e28a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091430132},"e-255":{"id":"e-255","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-256"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|7ce852e6-25c7-699c-c8de-20f0a087dac9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|7ce852e6-25c7-699c-c8de-20f0a087dac9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091430951},"e-257":{"id":"e-257","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-258"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|7ce852e6-25c7-699c-c8de-20f0a087dac9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|7ce852e6-25c7-699c-c8de-20f0a087dac9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091430951},"e-258":{"id":"e-258","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-257"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245557|7ce852e6-25c7-699c-c8de-20f0a087dac9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245557|7ce852e6-25c7-699c-c8de-20f0a087dac9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613091430951},"e-259":{"id":"e-259","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-260"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b24ef7f8-86e5-1c85-e1c5-b65466441b29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b24ef7f8-86e5-1c85-e1c5-b65466441b29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613095860752},"e-260":{"id":"e-260","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b24ef7f8-86e5-1c85-e1c5-b65466441b29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b24ef7f8-86e5-1c85-e1c5-b65466441b29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613095860754},"e-261":{"id":"e-261","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-262"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef24555a|071f15f1-7dc5-0a4f-9c97-67534b35b4f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef24555a|071f15f1-7dc5-0a4f-9c97-67534b35b4f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613095956288},"e-262":{"id":"e-262","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-261"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef24555a|071f15f1-7dc5-0a4f-9c97-67534b35b4f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef24555a|071f15f1-7dc5-0a4f-9c97-67534b35b4f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613095956288},"e-291":{"id":"e-291","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"071f15f1-7dc5-0a4f-9c97-67534b35b4f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"071f15f1-7dc5-0a4f-9c97-67534b35b4f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613104089164},"e-292":{"id":"e-292","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-291"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"071f15f1-7dc5-0a4f-9c97-67534b35b4f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"071f15f1-7dc5-0a4f-9c97-67534b35b4f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613104089167},"e-331":{"id":"e-331","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-332"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b24ef7f8-86e5-1c85-e1c5-b65466441b29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b24ef7f8-86e5-1c85-e1c5-b65466441b29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613105513276},"e-332":{"id":"e-332","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-331"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b24ef7f8-86e5-1c85-e1c5-b65466441b29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b24ef7f8-86e5-1c85-e1c5-b65466441b29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613105513278}},"actionLists":{"a-14":{"id":"a-14","title":"Delete Module","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".module","selectorGuids":["75f9f40a-c55b-a629-7189-6b6fea91470f"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1613091010137},"a-15":{"id":"a-15","title":"50% Opacity Module","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"PARENT","selector":".module","selectorGuids":["75f9f40a-c55b-a629-7189-6b6fea91470f"]},"value":0.5,"unit":""}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"65e320c350e40175ef245557|13783405-4a60-1806-b07a-2c982c1b3c7f"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1613091264131},"a-16":{"id":"a-16","title":"100% Opacity Module","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"PARENT","selector":".module","selectorGuids":["75f9f40a-c55b-a629-7189-6b6fea91470f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1613091264131},"a-19":{"id":"a-19","title":"Profile Menu Click","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".menu-down","selectorGuids":["dfc628a5-5bc1-65a4-14aa-940dbe719d34"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1613095864676},"a-20":{"id":"a-20","title":"Profile Menu Click Off","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".menu-down","selectorGuids":["dfc628a5-5bc1-65a4-14aa-940dbe719d34"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1613095864676},"a-21":{"id":"a-21","title":"Profile Menu Hover","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-down","selectorGuids":["dfc628a5-5bc1-65a4-14aa-940dbe719d34"]},"yValue":4,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1613104093469},"a-22":{"id":"a-22","title":"Profile Menu Hover Off","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-down","selectorGuids":["dfc628a5-5bc1-65a4-14aa-940dbe719d34"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1613104093469}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DashboardNav({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <_Component
      className={_utils.cx(_styles, "dashboard-nav")}
      tag="div"
      data-collapse="all"
      data-animation="default"
      data-duration="0"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 0,
        collapse: "all",
        noScroll: false,
        docHeight: false,
      }}
    >
      <_Builtin.SearchForm
        className={_utils.cx(_styles, "search")}
        action="/search"
      >
        <_Builtin.SearchButton
          className={_utils.cx(_styles, "search-button")}
          type="submit"
          value="Search"
        />
        <_Builtin.SearchInput
          className={_utils.cx(_styles, "search-input")}
          autoFocus={false}
          disabled={false}
          maxLength={256}
          name="query"
          placeholder="Search"
          required={true}
          type="search"
          id="search"
        />
      </_Builtin.SearchForm>
      <_Builtin.Block className={_utils.cx(_styles, "nav-spacer")} tag="div" />
      <_Builtin.DropdownWrapper
        className={_utils.cx(_styles, "nav-dropdown")}
        tag="div"
        delay="0"
        hover={false}
      >
        <_Builtin.DropdownToggle
          className={_utils.cx(_styles, "nav-dropdown-toggle")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-icon-item")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "nav-icon")}
              loading="lazy"
              width="27"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef24550f_Updates%20Icon.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "bell-dot")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.DropdownToggle>
        <_Builtin.DropdownList
          className={_utils.cx(_styles, "nav-dropdown-list")}
          tag="nav"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "module", "heavy-shadow")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "module-main")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "notificaiton-element")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "notification-top")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notification-dot")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notificaiton-title")}
                    tag="div"
                  >
                    {"Email Snooze"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "notification-description")}
                >
                  {"Emails can now be snoozed to be seen at a later time."}
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "notificaiton-element", "seen")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "notification-top")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notification-dot", "seen")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notificaiton-title")}
                    tag="div"
                  >
                    {"Smarter Tasks"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "notification-description")}
                >
                  {
                    "Tasks are now upgraded with a whole bunch more features to make it easier."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "notificaiton-element", "seen")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "notification-top")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notification-dot", "seen")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notificaiton-title")}
                    tag="div"
                  >
                    {"No Contact Limit"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "notification-description")}
                >
                  {
                    "You wanted no limit on the contact list, and delivered! The contact list is now unlimited."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "module-button")}
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"See all updates"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.DropdownList>
      </_Builtin.DropdownWrapper>
      <_Builtin.DropdownWrapper
        className={_utils.cx(_styles, "nav-dropdown")}
        tag="div"
        delay="0"
        hover={false}
      >
        <_Builtin.DropdownToggle
          className={_utils.cx(_styles, "nav-dropdown-toggle")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-icon-item")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "nav-icon")}
              loading="lazy"
              width="27"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245516_Bell.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "bell-dot")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.DropdownToggle>
        <_Builtin.DropdownList
          className={_utils.cx(_styles, "nav-dropdown-list")}
          tag="nav"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "module", "heavy-shadow")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "module-main")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "notificaiton-element")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "notification-top")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notification-dot")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notificaiton-title")}
                    tag="div"
                  >
                    {"3 new emails"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "notification-description")}
                >
                  {"From AudioHunt, Domains R Us, and Google Accounts."}
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "notificaiton-element", "seen")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "notification-top")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notification-dot", "seen")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notificaiton-title")}
                    tag="div"
                  >
                    {"4 new orders"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "notification-description")}
                >
                  {"There are new orders to be fulfilled."}
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "notificaiton-element", "seen")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "notification-top")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notification-dot", "seen")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notificaiton-title")}
                    tag="div"
                  >
                    {"5 new tickets"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "notification-description")}
                >
                  {"There are new tickets to be checked."}
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "module-button")}
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"See all notifications"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.DropdownList>
      </_Builtin.DropdownWrapper>
      <_Builtin.DropdownWrapper
        className={_utils.cx(_styles, "profile-menu-dropdown")}
        tag="div"
        delay="0"
        hover={false}
      >
        <_Builtin.DropdownToggle
          className={_utils.cx(_styles, "profile-menu")}
          data-w-id="b24ef7f8-86e5-1c85-e1c5-b65466441b29"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "profile-image")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "cover-image")}
              loading="lazy"
              width="auto"
              height="auto"
              data-ms-member="profile-image"
              alt=""
              src={ user.picture }
            />
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "menu-down")}
            loading="lazy"
            width="15"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245506_CaretDown.svg"
          />
        </_Builtin.DropdownToggle>
        <_Builtin.DropdownList
          className={_utils.cx(_styles, "profile-menu-list")}
          tag="nav"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "profile-menu-link")}
            options={{
              href: "#",
            }}
          >
            {"My Profile"}
          </_Builtin.NavbarLink>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-divider")}
            tag="div"
          />
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "profile-menu-link")}
            options={{
              href: "#",
              preload: "none",
            }}
          >
            {"Help Center"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "profile-menu-link")}
            options={{
              href: "#",
              preload: "none",
            }}
          >
            {"Terms & Conditions"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "profile-menu-link")}
            options={{
              href: "#",
              preload: "none",
            }}
          >
            {"Privacy Policy"}
          </_Builtin.NavbarLink>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-divider")}
            tag="div"
          />
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "profile-menu-link")}
            data-ms-content="!members"
            options={{
              href: "/api/auth/login",
              preload: "none",
            }}
          >
            {"Sign In"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "profile-menu-link")}
            data-ms-content="members"
            options={{
              href: "/api/auth/logout",
              preload: "none",
            }}
          >
            {"Sign Out"}
          </_Builtin.NavbarLink>
        </_Builtin.DropdownList>
      </_Builtin.DropdownWrapper>
    </_Component>
  );
}
