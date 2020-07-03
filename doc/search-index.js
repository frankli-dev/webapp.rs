var searchIndex = JSON.parse('{\
"backend":{"doc":"","i":[[5,"main","backend","",null,[[],["result",6]]]],"p":[]},\
"webapp":{"doc":"The core library","i":[[0,"config","webapp","Configuration related structures",null,null],[3,"Config","webapp::config","The global configuration",null,null],[12,"server","","The server configuration",0,null],[12,"log","","The logger configuration",0,null],[12,"postgres","","The database configuration",0,null],[3,"ServerConfig","","The server configuration",null,null],[12,"url","","The full server URL",1,null],[12,"cert","","The server certificate",1,null],[12,"key","","The server key",1,null],[12,"redirect_from","","The redirecting URLs",1,null],[3,"LogConfig","","The logger configuration",null,null],[12,"actix_web","","The logging level of actix-web",2,null],[12,"webapp","","The logging level of the application",2,null],[3,"PostgresConfig","","The database configuration",null,null],[12,"host","","The full host to the database",3,null],[12,"username","","The username for the database",3,null],[12,"password","","The password for the database",3,null],[12,"database","","The database to be used",3,null],[11,"from_file","","Creates a new `Config` instance using the parameters found…",0,[[],["result",6]]],[0,"protocol","webapp","The main protocol handling",null,null],[0,"model","webapp::protocol","Basic models",null,null],[3,"Session","webapp::protocol::model","A session representation",null,null],[12,"token","","The actual session token",4,null],[11,"new","","Create a new session from a given token",4,[[]]],[0,"request","webapp::protocol","Request messages",null,null],[3,"LoginCredentials","webapp::protocol::request","The credentials based login request",null,null],[12,"username","","The username to login",5,null],[12,"password","","The password to login",5,null],[3,"LoginSession","","The session based login request",null,null],[12,"0","","",6,null],[3,"Logout","","The logout request",null,null],[12,"0","","",7,null],[0,"response","webapp::protocol","Response specific implementations",null,null],[3,"Login","webapp::protocol::response","The login response",null,null],[12,"0","","",8,null],[3,"Logout","","The logout response",null,null],[0,"schema","webapp","",null,null],[0,"sessions","webapp::schema","Representation of the `sessions` table.",null,null],[3,"table","webapp::schema::sessions","The actual table struct",null,null],[0,"dsl","","Re-exports all of the columns of this table, as well as…",null,null],[0,"columns","","Contains all of the columns of this table",null,null],[3,"star","webapp::schema::sessions::columns","Represents `table_name.*`, which is sometimes needed for…",null,null],[3,"token","","The `token` column of the `sessions` table.",null,null],[6,"SqlType","webapp::schema::sessions","The SQL type of all of the columns on this table",null,null],[6,"BoxedQuery","","Helper type for representing a boxed query from this table",null,null],[17,"all_columns","","A tuple of all of the columns on this table",null,null],[11,"star","","Represents `table_name.*`, which is sometimes necessary…",9,[[],["star",3]]],[17,"CONFIG_FILENAME","webapp","The global config file name",null,null],[17,"API_URL_LOGIN_CREDENTIALS","","",null,null],[17,"API_URL_LOGIN_SESSION","","",null,null],[17,"API_URL_LOGOUT","","",null,null],[11,"from","webapp::config","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","webapp::protocol::model","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","webapp::protocol::request","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","webapp::protocol::response","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","webapp::schema::sessions","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"filter","","",9,[[]]],[11,"group_by","","",9,[[]]],[11,"join_target","","",9,[[["onclausewrapper",3]]]],[11,"into_update_target","","",9,[[],["updatetarget",3]]],[11,"select","","",9,[[]]],[11,"internal_into_boxed","","",9,[[]]],[11,"as_query","","",9,[[]]],[11,"internal_load","","",9,[[],[["result",4],["vec",3],["error",4]]]],[11,"find","","",9,[[]]],[11,"or_filter","","",9,[[]]],[11,"limit","","",9,[[]]],[11,"for_update","","",9,[[]]],[11,"with_lock","","",9,[[]]],[11,"offset","","",9,[[]]],[11,"order","","",9,[[]]],[11,"then_order_by","","",9,[[]]],[11,"distinct","","",9,[[]]],[11,"distinct_on","","",9,[[]]],[11,"from","webapp::schema::sessions::columns","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"execute","","",12,[[],[["error",4],["result",4]]]],[11,"clone","webapp::config","",0,[[],["config",3]]],[11,"clone","","",1,[[],["serverconfig",3]]],[11,"clone","","",2,[[],["logconfig",3]]],[11,"clone","","",3,[[],["postgresconfig",3]]],[11,"clone","webapp::schema::sessions","",9,[[],["table",3]]],[11,"clone","webapp::schema::sessions::columns","",11,[[],["star",3]]],[11,"clone","","",12,[[],["token",3]]],[11,"default","","",12,[[],["token",3]]],[11,"eq","webapp::protocol::model","",4,[[["session",3]]]],[11,"ne","","",4,[[["session",3]]]],[11,"eq","webapp::protocol::request","",5,[[["logincredentials",3]]]],[11,"ne","","",5,[[["logincredentials",3]]]],[11,"eq","","",6,[[["loginsession",3]]]],[11,"ne","","",6,[[["loginsession",3]]]],[11,"eq","","",7,[[["logout",3]]]],[11,"ne","","",7,[[["logout",3]]]],[11,"eq","webapp::protocol::response","",8,[[["login",3]]]],[11,"ne","","",8,[[["login",3]]]],[11,"eq","","",10,[[["logout",3]]]],[11,"fmt","webapp::protocol::model","",4,[[["formatter",3]],["result",6]]],[11,"fmt","webapp::protocol::request","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","webapp::protocol::response","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","webapp::schema::sessions","",9,[[["formatter",3]],["result",6]]],[11,"fmt","webapp::schema::sessions::columns","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"table","webapp::schema::sessions","",9,[[]]],[11,"build","webapp::protocol::model","",4,[[]]],[11,"eq_all","webapp::schema::sessions::columns","",12,[[]]],[11,"values","webapp::protocol::model","",4,[[]]],[11,"values","webapp::schema::sessions","",9,[[]]],[11,"join_target","","",9,[[["join",3]]]],[11,"join_target","","",9,[[["joinon",3]]]],[11,"join_target","","",9,[[["selectstatement",3]]]],[11,"join_target","","",9,[[["boxedselectstatement",3]]]],[11,"from_clause","","",9,[[]]],[11,"default_selection","","",9,[[]]],[11,"primary_key","","",9,[[]]],[11,"all_columns","","",9,[[]]],[11,"into_update_target","","",9,[[],["updatetarget",3]]],[11,"walk_ast","webapp::schema::sessions::columns","",11,[[["astpass",3]],["queryresult",6]]],[11,"walk_ast","","",12,[[["astpass",3]],["queryresult",6]]],[11,"as_query","webapp::schema::sessions","",9,[[]]],[11,"serialize","webapp::protocol::model","",4,[[],["result",4]]],[11,"serialize","webapp::protocol::request","",5,[[],["result",4]]],[11,"serialize","","",6,[[],["result",4]]],[11,"serialize","","",7,[[],["result",4]]],[11,"serialize","webapp::protocol::response","",8,[[],["result",4]]],[11,"serialize","","",10,[[],["result",4]]],[11,"deserialize","webapp::config","",0,[[],["result",4]]],[11,"deserialize","","",1,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","webapp::protocol::model","",4,[[],["result",4]]],[11,"deserialize","webapp::protocol::request","",5,[[],["result",4]]],[11,"deserialize","","",6,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"deserialize","webapp::protocol::response","",8,[[],["result",4]]],[11,"deserialize","","",10,[[],["result",4]]]],"p":[[3,"Config"],[3,"ServerConfig"],[3,"LogConfig"],[3,"PostgresConfig"],[3,"Session"],[3,"LoginCredentials"],[3,"LoginSession"],[3,"Logout"],[3,"Login"],[3,"table"],[3,"Logout"],[3,"star"],[3,"token"]]},\
"webapp_backend":{"doc":"The backend library","i":[[3,"Server","webapp_backend","The server instance",null,null],[11,"from_config","","Create a new server instance",0,[[["config",3]],["result",6]]],[11,"start","","Start the server",0,[[],["result",6]]],[11,"url_to_socket_addrs","","Convert an `Url` to a vector of `SocketAddr`",0,[[["url",3]],[["vec",3],["result",6]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]]],"p":[[3,"Server"]]},\
"webapp_frontend":{"doc":"The frontend library","i":[[5,"run_app","webapp_frontend","Start the application",null,[[],[["result",4],["jsvalue",3]]]],[5,"__wasm_bindgen_generated_run_app","","Start the application",null,[[]]],[14,"fetch","","Generic API fetch macro",null,null]],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);