#semantic-ui-modal

Semantic Modals, packaged to play nice with Meteor.

**NOTE: THIS WILL ALSO ADD THE ENTIRE SEMANTIC-UI PACKAGE, WHICH IS PRETTY CHUNKY!  I might release a future version with only the relevant css and js for the modal, but for the time being, this is designed for people who are using Semantic-UI for the rest of their app.**

## Usage

Allows the user to create Semantic-UI modals on the fly from Javascript code. Tested on Meteor 0.8.3, and the general modal method relies on `{{>UI.dynamic ...}}`, so it will not work with versions earlier than 0.8.2.  Confirm modal may work on earlier versions, but it's untested.

## Installation

    mrt add semantic-ui-modal

## SemanticModal

The package will add an object called **`SemanticModal`** to the global namespace.  It has two methods:

### confirmModal(options, postRender)

This will render a simple modal with header, body and either "Okay" and "Cancel" buttons, or no buttons at all.  It is designed as a convenience method.

*options* - an object containing any of the following:

    * header: string header
    * message: the main body of the modal, which can be HTML or a simple string.
    * noButtons: if set to true, the modal will have no button row, and must be closed by clicking on the dimmer.
    * callback: a function to run when the user clicks the "Okay" button.  If the modal is closed by clicking "Cancel" no further action will be taken.

*postRender* - a callback to run once the modal has been shown.

### generalModal(template, data, options)

This will render the supplied template in a new modal, with the data context provided.  Note that although the template will be reactive with respect to any registered helpers, it *will not be* with respect to the data context.

*template* - the string name of any registered template (note that you cannot pass the template instance constructor itself).

*data* - the data context to pass to the rendered template.  Note that at present this is **NOT** reactive, so if reactivity is required in any part of the template, you need to register an appropriate helper for the supplied template.  These will work in the same way they would anywhere else.

*options* - an object containing any of the following:

    * modalSettings: a dictionary of [Semantic-UI modal settings](http://semantic-ui.com/modules/modal.html#/settings) which will overwrite the defaults.
    * modalClass: CSS class(es) to be added to the `"ui modal"` object.  This allows for easy styling of the modal with user stylesheets, *particularly* as far as width and horizontal positioning are concerned.  Semantic-UI already ships with the modal classes `small` and `large` for overwriting the default width settings, but custom classes are easy to write by simply specifying `width` and negative `margin-left` of half the width.
    * postRender: a function to run once the modal has been shown.

## Issues

Please feel free to raise an issue if you encounter problems or you'd like to suggest a feature.
