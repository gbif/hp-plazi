var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});
const publisherKeys = [
  '7ce8aef0-9e92-11dc-8738-b8a03c50a862',
  'b32d3b6f-0ae7-4305-a20c-acfa59f66996',
  '091ce7dd-c13c-4aa0-946e-df8ad22b627a',
  '382dc140-b75c-4b3e-989e-8bbd2e4f5cc0',
  '9ec4b1f3-da61-423a-9162-ccce2eabdb03',
  '3ef8f405-8adc-457c-95d2-2a4610e6ba47',
  'a064f300-1bc8-41ea-9364-b864ef4e8938',
  '75690ef9-a4be-483d-b2df-f5a19bdd1f9e',
  'e034534f-2cc7-4026-957a-dd034629514f',
  'af62a723-bd15-484a-995e-6fc6720c54f0',
  '07fa07e6-9d4f-4b82-99fb-1a2055991233',
  'f6406919-13e5-48e9-9e99-8226df18fa6d',
  '9eb1b78c-2c2b-431e-8fd7-492734770611',
  '750a8724-fa66-4c27-b645-bd58ac5ee010',
  'a019af3a-3982-4c10-9a27-2a793d40ed97',
  '03433ccd-5166-4730-94a9-e06ec25d1a72',
  '5aaf6f62-72a5-403f-8fae-e8f9cd4a18cd',
  'ac084e47-e95d-4e30-ab94-115d4dec59b2',
  '7597e7d3-b8d6-4ecf-84a3-d731d8b6d290',
  'd9a8e26f-f479-45f2-9bf3-144c25965646',
  '3996dc51-9cce-445b-a06f-7aba727bb0d8',
  'eb49971d-5d73-4534-a87a-81443c0cd66b',
  '4a99b0fe-19ca-4e28-9682-4ea0e3bec4e0',
  'b7dc6d5d-49b7-4b55-936a-fb85e33d65e1',
  'b0e7edd4-d8b5-4b1c-bb5f-f6484e16c21c',
  '33da3ffd-26aa-49cf-b30c-15d13186faca',
  '24eb42e2-7877-4e58-af67-4aea8a3cd177',
  'fc871c4a-bb5e-4db6-b332-487bc23797f1',
  'adfff58c-db96-431d-9064-527cf09b0485',
  '78b5476e-1eb5-4531-9ff1-e1971d43eb4d',
  '43999f3b-3220-490b-83f4-954cd43c3f6c',
  'aa95865f-a32f-46d4-8a10-178d69436a90',
  'bb922300-7ddb-11de-a300-90ac77aa923f',
  'bd140c06-099b-4b87-821a-2d4bedf53af4',
];

var siteConfig = {
  routes: {
    alwaysUseHrefs: false,
    enabledRoutes: ['occurrenceSearch', 'datasetSearch', 'datasetKey', 'literatureSearch', 'publisherKey', 'collectionKey'],
  },
  dataset: {
    rootFilter: {
      publishingOrg: publisherKeys
    },
    excludedFilters: ['datasetType', 'hostingOrganizationKey', 'networkKey', 'publishingCountryCode', 'license', 'projectId', 'dwcaExtension'],
    highlightedFilters: ['q', 'anyPublisherKey']
  },
  occurrence: {
    excludedFilters: ['publishingCountryCode'],
    highlightedFilters: ['taxonKey', 'country', 'year', 'datasetKey', 'publishingOrg'],
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 1
    },
    // all the columns that are available to the user. This array defines the order they appear in. By default all all column are available.
    availableTableColumns: ['features', 'country', 'stateProvince', 'locality', 'coordinates', 'year', 'eventDate', 'basisOfRecord', 'recordedBy', 'identifiedBy', 'recordNumber', 'catalogNumber', 'collectionCode', 'institutionCode', 'datasetKey', 'publishingOrg'],
    defaultTableColumns: ['features', 'country', 'coordinates', 'year', 'catalogNumber', 'datasetKey'], // the columns showed by default. The order is not relevant, as it is defined in the list of available columns. The user can change what columns to show in the UI.
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: { type: 'in', key: 'publishingOrg', values: publisherKeys }, 
    occurrenceSearchTabs: ['MAP', 'TABLE', 'DATASETS', 'CLUSTERS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'and', predicates: [
          {
            type: 'in',
            key: 'publishingOrganizationKey',
            values: publisherKeys
          },
          {
            type: 'equals',
            key: 'relevance',
            value: 'GBIF_USED'
          },
          {
            type: 'equals',
            key: 'peerReview',
            value: 'true'
          }
        ]
      }
    }
  },
}
