// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import AssetService from '../services/asset';

async function getProjTemplates(req: any, res: any) {
  try {
    const templates = await AssetService.manager.getProjectTemplates();
    res.status(200).json(templates);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : error,
    });
  }
}

export const AssetController = {
  getProjTemplates: getProjTemplates,
};
