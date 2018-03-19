// Type definitions for Database
// Project: Efficy Intellisense
// Definitions by: Félix Barzin <https://github.com/felix.barzin>               
// TypeScript Version: 2.3

declare const Database: DatabaseStatic;

interface TDataSet {
    CanModify: boolean;
    First;
    Next;
    Eof: boolean;
    IsEmpty: boolean;
    /**
     * Workflow Scripting - Data sets -
     * Returns a field whose value can be accessed or modified using the AsString, AsInteger, AsFloat or Value properties.
     * If the field does not exist, an exception is thrown.
     * @param fieldName 
     */
    FieldByName(fieldName: string);
    /**
     * Workflow Scripting - Data sets -
     * Returns a field whose value can be accessed or modified using the AsString, AsInteger, AsFloat or Value properties.
     * If hte field doesn't exist, the function returns null.
     * @param fieldName 
     */
    FindField(fieldName: string);
    Delete;
    Insert;
    Append;
    Edit;
    Post;
}

interface DatabaseStatic<TElement extends Node = HTMLElement> {
    
    //#region Session methods
    /**
     * Workflow Scripting - Session methods -
     * Connects to the database.
     * @param databaseAlias Insert the database Alias
     * @param userCode 
     * @param password  
     */
    Logon(databaseAlias, userCode, password : string);
    /**
     * Workflow Scripting - Session methods -
     * Disconnect from the database.
     */
    Logoff;
    /**
     * Workflow Scripting - Session methods -
     * Retrieves the array of users.
     * Also refer to Arrays in Efficy scripting (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}).
     */
    UserList: OleVariant;
    /**
     * Workflow Scripting - Session methods -
     * Retrieves the array of members of group GroupID (@see {@link https://help.efficy.com/HelpEfficy/technical/Configuration_Tool/EN/index.html?groups.htm}).
     * Also refer to Arrays in Efficy scripting (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm})
     * @param groupId
     */
    UsersInGroup(groupId: number): OleVariant;
    /**
     * Workflow Scripting - Session methods -
     * Retrieves the language code (@see {@link https://help.efficy.com/HelpEfficy/technical/Configuration_Tool/EN/index.html?creation_of_a_user.htm}) used by the current user.
     */
    Language: number;
    /**
     * Workflow Scripting - Session methods -
     * Retrieves the ID (key) (@see {@link https://help.efficy.com/HelpEfficy/technical/Configuration_Tool/EN/index.html?creation_of_a_user.htm}) of the current user.
     */
    CurrentuserID: number;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    CurrentUserCode: string;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    CurrentUserFullName: string;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    CurrentUserContactID: double;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    CurrentUserGroups: OleVariant;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    IsCurrentUserInGroup(groupId: number): boolean;
    /**
     * Workflow Scripting - Session methods -
     * Retrieves the full name of the user userID.
     * @param userID 
     */
    GetUserName(userID: number): string;
    /**
     * Workflow Scripting - Session methods -
     * Retrieves the full name of the user userID
     * @param userID
     */
    GetUserCode(userID: number): string;
    /**
     * Workflow Scripting - Session methods -
     * Retrieves the ID (key) (@see {@link https://help.efficy.com/HelpEfficy/technical/Configuration_Tool/EN/index.html?creation_of_a_user.htm}) of the user UserCode.
     * @param userCode Insert the user code ???
     */
    GetuserID(userCode: string): number;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    GetUserNameFromCode(userCode: string): string;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    GetContactKeyForUser(userID: number): double;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    CurrentDatabaseAlias: string;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    DatabaseLicenseName: string;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    DatabaseIsChild: boolean;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    ParentAlias: string;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    IsGroup(userID: number): boolean;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    GetAccountKind(userID: number): number;
    /**
     * Workflow Scripting - Session methods -
     * 
     */
    DisableNotifications: boolean;
    /**
     * Workflow Scripting - Session methods -
     * If set to true, no workflow scripting events get generated by subsequent operations.
     * Use this method with care given the recursive triggering (@see {@link https://help.efficy.com/efficy.dll/home?page=home_technical.htm&filebase=HelpEfficy&custombase=HelpEfficy&language=en#}) of database events.
     */
    DisableWorkflow: boolean;
    /**
     * Workflow Scripting - Session methods -
     */
    DisableSecurity: boolean;
    //#endregion
    //#region Metadata methods
    GetMultiValueLabels(tableID: number, fieldName, Value: string): string;
    /**
     * Workflow Scripting - Metadata methods -
     * Returns the look-up key value for a look-up label.
     * @param tableId Identify the field for which the look-up conversion is requested.
     * @param fieldName Identify the field for which the look-up conversion is requested.
     * @param value Text value of look-up field.
     */
    GetLookupKeyFromValue(tableID: number, fieldName, value: string): number;
    /**
     * Workflow Scripting - Metadata methods -
     * Returns the look-up key text for a look-up key.
     * @param tableId Identify the field for which the look-up conversion is requested.
     * @param fieldName Identify the field for which the look-up conversion is requested.
     * @param key The key value of look-up field
     */
    GetLookupValueFromKey(tableID: number, fieldName: string, Key: number): string;
    IsLookupFieldByReference(tableID: number, fieldName: string): boolean;
    /**
     * Workflow Scripting - Metadata methods -
     * Tests whether the current user has the right to perform a certain operation on an entity.
     * The operation can be 0(read), 1(write), 2(delete), 3(add), 4(execute).
     * @param Entity 
     * @param Operation 
     */
    HasRightOnTable(Entity: TEntityHandle, Operation: TAccessOperation): boolean;
    IsRecentRecorded(Entity: TEntityHandle): boolean;
    AddRecent(Entity: TEntityHandle, Key: double, Name: string);
    RemoveRecent(Entity: TEntityHandle, Key: double);
    EntityFromContext(contextHandle: TcontextHandle): TEntityHandle;
    GetSysStorageValue(AName: string): string;
    SetSysStorageValue(AName: string, Value: string);
    /**
     * Workflow Scripting - Metadata methods -
     * Executes a SQL command in the database that does not return a data set (@see {@link https://help.efficy.com/efficy.dll/home?page=home_technical.htm&filebase=HelpEfficy&custombase=HelpEfficy&language=en#}).
     * This method is typically used for update or delete SQL instructions.
     * @param SQL 
     * @param queryParams 
     * @param invalidateConnection Invalidate the current database connection; required if the SQL command modifies the system tables (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Database_Structure/EN/index.html?tableoverview.htm}).
     */
    ExecSQL(SQL: string, queryParams: string, invalidateConnection: boolean);
    DbEngine: string;
    //#endregion
    //#region Consult methods
    OpenSearchContext(Entity: TEntityHandle): TcontextHandle;
    /**
     * Closes a context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}). (A context remains memory-resident (on the web server) until it’s destroyed again.) The variable ContextHandle is set to 0.
     * @param contextHandle 
     */
    CloseContext(contextHandle: TcontextHandle);
    Search(contextHandle: TcontextHandle, SearchField, OrderByFields, SearchValue: string, OwnOnly, Contains, OpenedOnly: boolean, Category: string, ForceRefresh, GetAllRecords: boolean): TDataSet;
    GetSearchFields(Entity: TEntityHandle): OleVariant;
    /**
     * Opens a consult context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}) for the Entity.
     * A context remains memory-resident (on the web server) until it’s destroyed again. To avoid memory leaks, always match an OpenConsultContext with a CloseContext call.
     * Test for Dataset.IsEmpty to make sure the category is selected for the current record!
     * @param Entity 
     */
    OpenConsultContext(Entity: TEntityHandle): TcontextHandle;
    Consult(contextHandle: TcontextHandle, Key: double, ForceRefresh: boolean): TDataSet;
    /**
     * Retrieves the data set (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/datasets.htm}) for the category CategoryName. Can be null if the category is not available to the current user (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_session_related_met.htm}).
     * Test for Dataset.IsEmpty (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/datasets.htm#isempty}) to make sure the category is selected for the current record.
     * @param contextHandle 
     * @param CategoryName 
     */
    GetCategoryDataSet(contextHandle: TcontextHandle, CategoryName: string): TDataSet;
    /**
     * Consults the main company of the specified contact.
     * @param ContcontextHandle The contact context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}) opened with OpenConsultContext (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_consult_methods.htm#openconsultcontext}).
     * @param ContactKey The key of the contact whose main company you retrieve
     */
    ConsultMainCompany(ContcontextHandle: TcontextHandle, ContactKey: double): TDataSet;
    /**
     * Retrieves the list of linked detail items in a data set.
     * @param queryHandle Returns the query handle (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/query_handles.htm}) of the database query. 
     * @param contextHandle The context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}) opened with OpenXXXContext
     * @param key The key of the main item.
     * @param detail The detail item.
     * @param forceRefresh Never use cached results.
     * @param getAllRecords Retrieves all recorsd in a single call instead of pages per page.
     * @param queryView The query view to be used on the database query; Use 0 to ignore query views.
     */
    ConsultDetail(queryHandle: number, contextHandle: TcontextHandle, key: double, detail: TEntityHandle, forceRefresh, getAllRecords: boolean, queryView: double): TDataSet;
    ConsultMany(contextHandle: TcontextHandle, findFields, orderByFields: string, findValues: OleVariant, forceRefresh: boolean): TDataSet;
    ConsultQuery(queryHandle: number, contextHandle: TcontextHandle, Master: number, Detail: double, QueryParams: OleVariant, ForceRefresh, GetAllRecords: boolean, QueryViewText: string): TDataSet;
    /**
     * Runs a native (SQL) database query and return the results in a data set.
     * @param queryHandle Returns the query handle (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/query_handles.htm}) of the database query.
     * @param contextHandle The context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}) opened with OpenXXXContext.
     * @param SQL The SQL select instruction.
     * @param queryParams The values of the parameters in the SQL select; Each parameters on a new line (separated by "\n" in Javascript).
     * @param forceRefresh Never used cached results.
     * @param getAllRecords Retrieves all records in a single call instead of page per page.
     * @param storeID A value between 1 and 20; Identifies the store in which the data set is kept; Successive calls with an identical storeID reuse the same data set.
     */
    ExecuteSystemSQLQuery(queryHandle: number, contextHandle: TcontextHandle, SQL, queryParams: string, forceRefresh, getAllRecords: boolean, storeID: number): TDataSet;
    ExecuteODBCQuery(queryHandle: number, contextHandle: TcontextHandle, Connection, SQL: string, ForceRefresh, GetAllRecords: boolean, StoreID: number): TDataSet;
    /**
     * Opens a temporary context without Entity. Typically used to run a ConsultQuery (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_consult_methods.htm#consultquery}) request.
     * You don't need to close the temporary context. Efficy handles this automatically.
     */
    OpenTemporaryContext: TcontextHandle;
    ExecuteQueryWithoutContext(queryHandle: number, Master: number, Detail: double, QueryParams: OleVariant, ForceRefresh, GetAllRecords: boolean): TDataSet;
    ConsultTaskList(queryHandle: number, Date: double, userIDs: OleVariant, ActiveUser, ShowPast: boolean, QueryView: double): TDataSet;
    ConsultAgenda(queryHandle: number, DateBegin, DateEnd: double, userIDs: OleVariant, ActiveUser, IncludeRelations: boolean, QueryView: double): TDataSet;
    ConsultEntityList(queryHandle: integer, Entity: TEntityHandle, userIDs: OleVariant, Opened, ActiveUser: boolean, QueryView: double, GetAllRecords: boolean): TDataSet
    ParentProjectKey(Key: double): double;
    ParentProductKey(Key: double): double;
    /**
     * Retrives the value for field fieldName of the consulted item.
     * @param contextHandle 
     * @param fieldName 
     * @param tableViewIndex The default TableViewIndex 0 corresponds to the main item.
     */
    GetFieldValue(contextHandle: TcontextHandle, fieldName: string, tableViewIndex: number = 0): OleVariant;
    GetCategoryFieldValue(contextHandle: TcontextHandle, Category, fieldName: string): OleVariant;
    /**
     * Adds a database relation without using an edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * WARNING : use AddLink2 when no multiple relations are available on the relation (the field "K_RELATION" doesn't exist in the database table).
     * @param entity The entities to link.
     * @param detail The entities to link.
     * @param key The keys of the linked entities.
     * @param detailKey The keys of the linked entities.
     * @param relationID specify -1 to generate a new "K_RELATION" value that will be returned in the variable.
     * @param ignoreExisting Don't throw an exception if the relation already exists.
     */
    AddLink(entity, detail: TEntityHandle, key, detailKey: double, relationID: number, ignoreExisting: boolean);
    /**
     * Adds a database relation without using an edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * WARNING : use AddLink when multiple relations are available on the relation (the field "K_RELATION" exists in the database table).
     * @param entity The entities to link.
     * @param detail The entities to link.
     * @param key The keys of the linked entities.
     * @param detailKey The keys of the linked entities.
     * @param ignoreExisting Don't throw an exception if the relation already exists.
     */
    AddLink2(entity, detail: TEntityHandle,key, detailKey: double, ignoreExisting: boolean);
    /**
     * Removes database relations, severs links without using an edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * Also refer to Arrays in Efficy scripting (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}).
     * @param entity 
     * @param detail 
     * @param key 
     * @param detailKeys 
     */
    DeleteLink(entity, detail: TEntityHandle, key: double, detailKeys: OleVariant);
    //#endregion
    //#region Edit methods
    /**
     * Opens an edit context for the record identified by 'entity' and 'key'.
     * A context remains memory-resident (on the web server) until it's destroyed again. Always match an OpendEditContext with a CloseContext (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_consult_methods.htm#closecontext}) call to avoir memory leaks.
     * @param entity 
     * @param key Use key = 0 to create a new record.
     * @param consultOnly Setting the parameter consultOnly to true makes the context 'read-only' - you won't be able to change any field in it!
     */
    OpenEditContext(Entity: TEntityHandle, Key: OleVariant, ConsultOnly: boolean): TcontextHandle;
    /**
     * Retrieves a master data set from the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * @param contextHandle 
     * @param tableViewIndex Specify 0 to retrieve the main entity data.
     */
    GetMasterDataSet(contextHandle: TcontextHandle, tableViewIndex: number): TDataSet;
    /**
     * Retrieves a relation data set for the specified Detail in the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * @param contextHandle 
     * @param detail 
     */
    GetDetailDataSet(contextHandle: TcontextHandle, detail: TEntityHandle): TDataSet;
    /**
     * Retrieves the data set for category CategoryName. Can be null when the category is not available to the current user (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_session_related_met.htm}).
     * Test for Dataset.IsEmpty to make sure the category is selected for the current record.
     * @param contextHandle
     * @param categoryName
     */
    GetCategoryDataSet(contextHandle: TcontextHandle, categoryName: string): TDataSet;
    /**
     * Updates the field values of a master data set in the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * @param contextHandle 
     * @param tableViewIndex Specify 0 to update the main entity data.
     * @param fieldNames The array of fields to update (also refer to Arrays in Efficy scripting (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm})).
     * @param fieldValues The array of field values; the number of elements in both arrays must be identical. (Also refer to Arrays in Efficy scripting (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}))
     */
    UpdateFields(contextHandle: TcontextHandle, tableViewIndex: number, fieldNames, fieldValues: OleVariant);
    /**
     * Update field values of a category data set in the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * @param contextHandle 
     * @param category The name of category to update
     * @param fieldNames The array of fields to update (also refer to Arrays in Efficy scripting (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm }).
     * @param fieldValues The array of fields value; the number of elements in both arrays must be identical (also refer to Arrays in Efficy scripting (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}).
     */
    UpdateCategory(contextHandle: TcontextHandle, category: string, fieldNames, fieldValues: OleVariant);
    /**
     * Inserts a detail relation in the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * The detail relation is identified by detail, detailKey and relationID.
     * WARNING : use InsertDetail2 when no multiple relations are available on this detail relation. (The field "K_RELATION" doesn't exist in database table.)
     * Use the SetUsers (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_edit_methods.htm#setusers}) function to link users.
     * @param contextHandle 
     * @param detail 
     * @param detailKey 
     * @param relationID Specify -1 to generate a new "K_RELATION" value that is returned in the variable.
     * @param linkMainComp When linking a contact, automatically link the contact's main company.
     */
    InsertDetail(contextHandle: TcontextHandle, detail: TEntityHandle, detailKey: double, relationID: number, linkMainComp: boolean);
    /**
     * Insert a detail relation in the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * The detail relation is identified by Detail and detailKey.
     * Use the SetUsers function(@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_edit_methods.htm#setusers}) to link users.
     * WARNING : use InsertDetail when multiple relations are available on this detail relation. (The field "K_RELATION" exists in the databas table.)
     * @param contextHandle 
     * @param detail 
     * @param detailKey 
     * @param linkMainComp When linking a contact, automatically link the contact's main company
     */
    InsertDetail2(contextHandle: TcontextHandle, detail: TEntityHandle, detailKey: double, linkMainComp: boolean);
    /**
     * Update field values of a detail relation in the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * When the detail relation does not exist, an exception is thrown.
     * WARNING : use UPDATEDETAIL2 when no multiple relations are available on this detail relationb (the field "K_RELATION" doesn't exist in the database table).
     * @param contextHandle 
     * @param detail Identify the relation to update.
     * @param detailKey Identify the relation to update. If detailKey is 0, the current detail record is used (relationID is ignored in this case).
     * @param relationID Identify the relation to update.
     * @param fieldNames The array of fields to update (also refer to Arrays in Efficy scripting @see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}).
     * @param fieldValues The array of field values; the number of elements in both arrays must be identical (also refer to Arrays in Efficy scripting @see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}).
     */
    UpdateDetail(contextHandle: TcontextHandle, detail: TEntityHandle, detailKey: double, relationID: number, fieldNames, fieldValues: OleVariant);
    /**
     * Update field values of a detail relation in the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * If the detail relation does not exist, an exception is thrown.
     * WARNING: use UpdateDetail when multiple relations are available on this detail relation (the field "K_RELATION" exists in the database table).
     * @param contextHandle 
     * @param detail Identify the relation to update.
     * @param detailKey Identify the relation to update. If detailKey is 0, the current detail record is used.
     * @param fieldNames The array of fields to update (also refer to Arrays in Efficy scripting @see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}).
     * @param fieldValues fieldValues The array of field values; the number of elements in both arrays must be identical (also refer to Arrays in Efficy scripting @see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}).
     */
    UpdateDetail2(contextHandle: TcontextHandle, detail: TEntityHandle, detailKey: double, fieldNames, fieldValues: OleVariant);
    /**
     * Deletes the detail relation identified by detail, detailKey and optionally relationID (if multiple relations are available).
     * @param contextHandle 
     * @param detail 
     * @param detailKey 
     * @param relationID 
     */
    DeleteDetail(contextHandle: TcontextHandle, detail: TEntityHandle, detailKey: double, relationID: number = relationID_NONE);
    ClearDetail(contextHandle: TcontextHandle, detail: TEntityHandle);
    /**
     * Sets the user relations.
     * @param contextHandle 
     * @param users The array of user IDs (keys) (also refer to Arrays in Efficy scripting @see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}).
     * @param clearUsers Clear the current user selection (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_session_related_met.htm}).
     * @param explodeGroups Optional, links all members of the specified groups.
     */
    SetUsers(contextHandle: TcontextHandle, users: OleVariant, clearUsers: boolean, explodeGroups: boolean = false): boolean;
    RemoveUsers(contextHandle, userID);
    /**
     * Sets the security for a user or group (@see {@link https://help.efficy.com/HelpEfficy/technical/Configuration_Tool/EN/index.html?groups.htm}). 
     * WARNING : From Efficy 2012 onwards, a call to SetUserSecurity with the value 0 removes the user from the security list. Also refer to the function SetSecurityUsers (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_edit_methods.htm#setsecurityusers});
     * Useful combinations are 7 (read/write), 15 (read/write/delete) and 271 (full control = read/write/delete/secure)
     * Example to check if a user has the permission to add content into a main entity
     * if ((UserDataSet.FieldByName('SECURITY').AsInteger & 32) == 32)
     * List of security codes
     * ACCESSCODE_SEARCH         = 1
     * ACCESSCODE_READ           = 2
     * ACCESSCODE_WRITE          = 4
     * ACCESSCODE_DELETE         = 8
     * ACCESSCODE_SHOWCONTENT    = 16
     * ACCESSCODE_ADDCONTENT     = 32
     * ACCESSCODE_MODIFYCONTENT  = 64
     * ACCESSCODE_DELETECONTENT  = 128
     * ACCESSCODE_SECURE         = 256
     * ACCESSCODE_SECURECONTENT  = 512
     * ACCESSCODE_NOCONTENT      = 2048
     * A few common combinations
     * ACCESSCODE_READ_WRITE = ACCESSCODE_SEARCH + ACCESSCODE_READ + ACCESSCODE_WRITE;
     * ACCESSCODE_READ_WRITE_DELETE = ACCESSCODE_READ_WRITE + ACCESSCODE_DELETE;
     * ACCESSCODE_READ_WRITE_SECURE = ACCESSCODE_READ_WRITE + ACCESSCODE_SECURE;
     * ACCESSCODE_FULLCONTROL = ACCESSCODE_READ_WRITE_DELETE + ACCESSCODE_SECURE;
     * ACCESSCODE_CONTENTFULLCONTROL = ACCESSCODE_SEARCH + ACCESSCODE_SHOWCONTENT + ACCESSCODE_MODIFYCONTENT + ACCESSCODE_ADDCONTENT + ACCESSCODE_DELETECONTENT + ACCESSCODE_SECURECONTENT;
     * @param contextHandle 
     * @param userID The user or group for which security is added.
     * @param securityValue A sum of one or more of the following values.
     */
    SetUserSecurity(contextHandle: TcontextHandle, userID: number, securityValue: number);
    /**
     * Adds each users of the Users (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}) array in the record's security. These users have the default security.
     * Users not in the Users array are deleted from the record's security.
     * @param contextHandle 
     * @param users 
     */
    SetSecurityUsers(contextHandle: TcontextHandle, users: Array<number>);
    /**
     * Commit the changes of the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}) to the database.
     * WARNING : Many functions has any permanent effect until CommitChanges is called.
     * @param contextHandle 
     * @param refreshData After the commit, refreshes all the data in the edit context; use this option if you plan to continue to use the edit context after the commit.
     */
    CommitChanges(contextHandle: TcontextHandle, refreshData: boolean);
    Modified(contextHandle: TcontextHandle): boolean;
    FieldModified(contextHandle: TcontextHandle, TableViewIndex: number, fieldName: string): boolean;
    CategoryModified(contextHandle: TcontextHandle, Category, fieldName: string): boolean;
    DetailModified(contextHandle: TcontextHandle, Detail: TEntityHandle): boolean;
    OldFieldValue(contextHandle: TcontextHandle, TableViewIndex: number, fieldName: string): OleVariant;
    OldCategoryFieldValue(contextHandle: TcontextHandle, Category, fieldName: string): OleVariant;
    PositionDetail(contextHandle: TcontextHandle, Detail: TEntityHandle, detailKey: double, relationID: number = relationID_NONE): boolean;
    GetMainDetail(contextHandle: TcontextHandle, Detail: TEntityHandle): double;
    DetailExists(contextHandle: TcontextHandle, Detail: TEntityHandle): boolean;
    IndexFromDetail(contextHandle: TcontextHandle, Detail: TEntityHandle): number;
    IndexFromCategory(contextHandle: TcontextHandle, Category: string): number;
    /**
     * Activates a Category in the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}). If the user does not have the appropriate rights on the category, an exception is thrown.
     * @param contextHandle 
     * @param category 
     */
    ActivateCategory(contextHandle: TcontextHandle, category: string): boolean;
    /**
     * Retrieves the main item key of the edit context (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/contexts_and_context_handles.htm}).
     * @param contextHandle 
     */
    GetEditKey(contextHandle: TcontextHandle): OleVariant;
    IsConfidential(contextHandle: TcontextHandle): boolean;
    GetReferenceToGenerate(contextHandle: TcontextHandle): double;
    /**
     * Requests that a unique reference number be generated when committing (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/database_-_edit_methods.htm#commitchanges}) the edit context.
     * The ReferenceID identifies the reference to generate.
     * @param contextHandle 
     * @param referenceID 
     */
    SetReference(contextHandle: TcontextHandle, referenceID: double);
    InsertAttachment(contextHandle: TcontextHandle, AttachmentType: number, Path: string): double;
    DuplicateAttachment(contextHandle: TcontextHandle, FileID: double, Version: number): double;
    ConvertAttachmentToPdf(contextHandle: TcontextHandle, FileID: double, Version: number): double;
    CreateAttachmentRevision(contextHandle: TcontextHandle, FileID: double, Version: number): number;
    /**
     * Opens an edit context for a relation. If the relation does not yet exist, it is created.
     * WARNING : use OpenEditContextRelation2 when no multiple relations are available on this detail relation (the field "K_RELATION" doesn't exist in the database table).
     * @param entity 
     * @param detail 
     * @param key 
     * @param detailKey 
     * @param relationID Specify -1 to generate a new "K_RELATION" value to be returned in the variable.
     */
    OpenEditContextRelation(entity, detail: TEntityHandle, key, detailKey: double, relationID: number): TcontextHandle;
    /**
     * Opens an edit context for a relation. If the relation does not yet exist, it will be created.
     * WARNING: use OpenEditContextRelation when multiple relations are available on this detail relation. (The field "K_RELATION" exists in the database table.)
     * @param entity 
     * @param detail 
     * @param key 
     * @param detailKey 
     */
    OpenEditContextRelation2(entity, detail: TEntityHandle, key, detailKey: double): TcontextHandle;
    /**
     * Delete records.
     * @param entity 
     * @param keys An array of entity keys to be deleted (also refer to Arrays in Efficy scripting @see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/arrays_in_efficy_scripting.htm}).
     */
    Delete(entity: TEntityHandle, keys: OleVariant);
    CopyFromExisting(contextHandle: TcontextHandle, Key: double, MinIndex: number = 0, MaxIndex: number = 999);
    CopyDetails(contextHandle, SourceEditHandle: TcontextHandle, Details: Array<TEntityHandle>, MainRelatio,Only, ChangedDetailsOnly: boolean);
    CopyDetails2(contextHandle: TcontextHandle, SourceEntity: TEntityHandle, Key: double, Details: Array<TEntityHandle>, MainRelationOnly, ChangedDetailsOnly: boolean);
    MergeTemplate(contextHandle: TcontextHandle, IDTemplate: double, MergeArguments: TEnhStringList): double;
    MergeEmailTemplate(contextHandle: TcontextHandle, IDTemplate: double, MergeArguments: TEnhStringList, subject: string): string;
    MergeEmailTemplateVariant(contextHandle: TcontextHandle, IDTemplate: double, MergeArguments: TEnhStringList): OleVariant;
    /**
     * Sends an e-mail message to Efficy users.
     * @param sendTo A semicolon-separated list of "To" recipients (user code or full name (@see {@link https://help.efficy.com/HelpEfficy/technical/Configuration_Tool/EN/index.html?creation_of_a_user.htm}))
     * @param sendCc A semicolon-separated list of "Cc" recipients (user code or full name).
     * @param subject The subject of the e-mail message.
     * @param body The body of the email message
     * @param entity Optional, insert a direct link to a record in the e-mail body
     * @param IDLinked Optional, insert a direct link to a record in the e-mail body
     */
    SendMailToUsers(sendTo, sendCc, subject, body: string, entity: TEntityHandle = ntNone,  IDLinked: double = 0);
    SendExternalMail(SendFrom, sendTo, sendCc, subject, Body: string, Entity: TEntityHandle = ntNone, IDLinked: double = 0, SendCode: string);
    ExportReport(contextHandle: TcontextHandle, K_Report: Double, ReportFormat, Parameters: string): Double;
    ExportReportToFile(K_Report: Double, ReportFormat, Parameters: string): string;
    //#endregion
    //#region Other methods
    CallLibraryFunction(DLLName, FunctionName: string, Parameters: OleVariant): OleVariant;
    OpenURL(URL, Request: string): string;
    OpenURL2(URL, Request, RequestHeader: string): string;
    /**
     * While executing a scheduled script or a data synchronization script, the log function lets you add a string in the log file of the Data Sync tool or the Efficy service Task Scheduler.
     * @param LogMessage 
     */
    Log(LogMessage: string);
    /**
     * This SOAP function prepares and sends the SOAP request.
     * Find some examples in the topic Scripts used by Data Sync Tool > Remote Data Sync Scripts (@see {@link https://help.efficy.com/HelpEfficy/whitepapers/Workflow_Scripting/EN/remote_datasync_scripts.htm}).
     */
    ExecuteBatch();
    FileExists(FileName: string): Boolean;
    DirectoryExists(Directory: string): Boolean;
    DeleteFile(FileName: string): Boolean;
    RenameFile(OldName, NewName: string): Boolean;
    //#endregion
}
