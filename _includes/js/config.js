var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});
const publisherKeys = [
  '7ce8aef0-9e92-11dc-8738-b8a03c50a862',
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
