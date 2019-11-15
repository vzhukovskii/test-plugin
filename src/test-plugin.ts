/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext): void {
    const informationMessageTestCommand = {
        id: 'upload-file-from-plugin',
        label: 'Upload File'
    };
    // tslint:disable-next-line: no-any
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        theia.window.showUploadDialog('~').then(result => {
            theia.window.showInformationMessage('Uploaded files: ' + result);
        });
    }));
}

export function stop() {
}
